import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from '../../../loader';
import { DIRECTIVES } from '.';

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true,
    },
  ],
})
export class ADSAngularWrapperModule {}
