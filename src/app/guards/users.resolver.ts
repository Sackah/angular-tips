import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { of } from 'rxjs';

export interface User {
  name: string;
}

const someUsers: Array<User> = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Charlie' },
];
const someUsers$ = of(someUsers);

export const usersResolver: ResolveFn<User[]> = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const name = next.paramMap.get('name');
  console.log(name); // logs null but can be used to make an api call in the case of a dynamic route
  return someUsers$;
};
