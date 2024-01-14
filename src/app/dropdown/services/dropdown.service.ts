import {
  ComponentRef,
  Injectable,
  Injector,
  ViewContainerRef,
} from '@angular/core';
import { DropdownComponent } from '../dropdown.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  private _ignoreNextClick = new BehaviorSubject<boolean>(false);
  ignoreNextClick$ = this._ignoreNextClick.asObservable();
  constructor(private injector: Injector) {}

  open(
    viewContainerRef: ViewContainerRef,
    position: { top: number; left: number }
  ): ComponentRef<DropdownComponent> {
    const dropdownComponentRef = viewContainerRef.createComponent(
      DropdownComponent,
      {
        injector: this.injector,
      }
    );
    dropdownComponentRef.instance.position = position;
    dropdownComponentRef.instance.closeEvent.subscribe(() =>
      this.closeDropdown(dropdownComponentRef)
    );
    return dropdownComponentRef;
  }

  closeDropdown(dropdownComponentRef: ComponentRef<DropdownComponent>) {
    dropdownComponentRef.destroy();
  }

  setIgnoreNextClick(value: boolean) {
    this._ignoreNextClick.next(value);
  }
}
