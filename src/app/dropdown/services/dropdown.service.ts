import {
  ComponentRef,
  Injectable,
  Injector,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { DropdownComponent } from '../dropdown.component';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor(private injector: Injector) {}

  open(
    content: TemplateRef<any>,
    viewContainerRef: ViewContainerRef,
    position: { top: number; left: number }
  ): ComponentRef<DropdownComponent> {
    const contentViewRef = content.createEmbeddedView(null);
    const dropdownComponentRef = viewContainerRef.createComponent(
      DropdownComponent,
      {
        injector: this.injector,
        projectableNodes: [[...contentViewRef.rootNodes]],
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
}
