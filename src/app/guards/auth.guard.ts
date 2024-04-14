import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const num = Math.random();

  if (num < 0.5) {
    return true;
  } else {
    alert('Access denied!');
    await router.navigateByUrl('/');
    return false;
  }
};
