import { Component } from '@angular/core';

@Component({
  selector: 'app-decorators',
  standalone: true,
  imports: [],
  templateUrl: './decorators.component.html',
  styleUrl: './decorators.component.css',
})
// @Frozen
export class DecoratorsComponent {
  @Emoji()
  flavor = 'vanilla';

  toppings: string[] = [];

  @Confirmable('Are you sure')
  @Confirmable('Are you really, really sure?? there is no going back')
  addToppings(topping = 'sprinkles') {
    this.toppings.push(topping);
  }

  @withTax(0.15)
  get price() {
    return 5.0 + 0.25 * this.toppings.length;
  }

  @useState(0) count!: number;
  setCount!: (val: number) => void;

  @useEffect()
  onEffect() {
    document.title = `You clicked ${this.count} times`;
  }

  @Destroy
  service = new Service();

  @Destroy
  manager = new Service();
}

// class
function Frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

console.log(Object.isFrozen(DecoratorsComponent));

// property
function Emoji() {
  // parent class, name of the property
  return function (target: Object, key: string) {
    type Key = keyof typeof target;
    let val = target[key as Key];

    const getter = () => {
      return val;
    };

    const setter = (next: typeof val) => {
      console.log('updating flavor...');
      val = `🍦 ${next} 🍦` as unknown as typeof val;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

// method
function Confirmable(message: string) {
  // parent class, name of the function, actual function
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const allow = confirm(message);

      if (allow) {
        const result = original.apply(this, args);
      }
      return null;
    };

    return descriptor;
  };
}

//accessor
function withTax(rate: number) {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.get;

    descriptor.get = function () {
      const result = original?.apply(this);

      return (result * (1 + rate)).toFixed(2);
    };

    return descriptor;
  };
}

// funky state hook implementation
function useState(seed: any) {
  return function (target: Object, key: string) {
    type Key = keyof typeof target;
    target[key as Key] = seed;
    // @ts-ignore
    target[`set${key.replace(/^\w/, (c) => c.toUpperCase())}` as Key] = (
      val: any
    ) => (target[key as Key] = val);
  };
}

function useEffect() {
  return function (
    target: Object,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    type Key = keyof typeof target;
    target['ngOnInit' as Key] = descriptor.value;
    target['ngAfterViewChecked' as Key] = descriptor.value;
  };
}

// export function Destroy(target: any, property: string) {
//   type Key = keyof typeof target;
//   // console.log(target);
//   //@ts-ignore
//   target['ngOnDestroy' as Key] = function () {
//     console.log('trying to destroy', this, property);
//     // target['property'].destroy();
//   };
// }

// export function Destroy(target: any, property: string) {
//   type Key = keyof typeof target;
//   //@ts-ignore
//   target['ngOnDestroy' as Key] = function () {
//     console.log('trying to destroy', this, property);
//     if (this[property] && typeof this[property].destroy === 'function') {
//       this[property].destroy();
//     }
//   };
// }

export function Destroy(target: any, property: string) {
  const originalOnDestroy = target.ngOnDestroy;

  target.ngOnDestroy = function () {
    console.log('trying to destroy', this, property);
    if (this[property] && typeof this[property].destroy === 'function') {
      this[property].destroy();
    }

    if (originalOnDestroy) {
      originalOnDestroy.apply(this);
    }
  };
}

class Service {
  destroy() {
    console.log('Destroy!!');
  }
}

export function Cache(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const cache = new Map();

  descriptor.value = function (...args: any[]) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = originalMethod.apply(this, args);
    cache.set(key, result);
    return result;
  };

  return descriptor;
}

class MyClass {
  callCount = 0;

  @Cache
  myMethod(arg: any) {
    this.callCount++;
    return arg * 2;
  }
}

const myInstance = new MyClass();

console.log(myInstance.myMethod(2)); // Logs "4"
console.log(myInstance.callCount); // Logs "1"

console.log(myInstance.myMethod(2)); // Logs "4"
console.log(myInstance.callCount); // Logs "1" (not "2", because the result was cached)

console.log(myInstance.myMethod(3)); // Logs "6"
console.log(myInstance.callCount); // Logs "2" (because a new argument was used)
