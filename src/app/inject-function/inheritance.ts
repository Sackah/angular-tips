import { UsersService } from './service/users.service';
import { inject } from '@angular/core';

/**
 * Without injection token
 */
export class Foo {
  constructor(private userService: UsersService) {}
}

export class Bar extends Foo {
  constructor(userService: UsersService) {
    super(userService);
  }
}

/**
 * With injection token
 */
export class Foo2 {
  userService = inject(UsersService);
}

export class Bar2 extends Foo2 {
  constructor() {
    super();
  }
}
