import {
  Component,
  ComponentRef,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { ModalService } from '../../modal/services/modal.service';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-modal-page',
  standalone: true,
  imports: [],
  templateUrl: './modal-page.component.html',
  styleUrl: './modal-page.component.css',
})
export class ModalPageComponent {
  private modalRef?: ComponentRef<ModalComponent>;
  modalService = inject(ModalService);
  viewContainerRef = inject(ViewContainerRef);

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.open(
      modalTemplate,
      this.viewContainerRef,
      { size: 'lg', title: 'Foo' }
    );
  }

  // @showModalBefore()
  // submitSomeDetails(modalTemplate: TemplateRef<any>) {
  //   console.log('Details submitted');
  // }

  // openModal(modalTemplate: TemplateRef<any>) {
  //   this.modalService
  //     .open(modalTemplate, { size: 'lg', title: 'Foo' })
  //     .subscribe((action) => console.log('Action', action));
  // }
}

function showModalBefore() {
  return function (
    target: { viewContainerRef: ViewContainerRef; modalService: ModalService },
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      // @ts-ignore
      const modalService = this.modalService;
      const content = args[0];
      // @ts-ignore
      const containerRef = this.viewContainerRef;
      const ref = modalService.open(content, containerRef);
      ref.instance.closeEvent.subscribe(() => {
        return null;
      });
      ref.instance.submitEvent.subscribe(() => {
        return originalMethod.apply(this, args);
      });
    };

    return descriptor;
  };
}
