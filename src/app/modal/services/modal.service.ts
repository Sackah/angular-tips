import {
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Injectable,
  Injector,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ModalComponent } from '../modal.component';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  open(
    content: TemplateRef<any>,
    viewContainerRef: ViewContainerRef,
    options?: { size?: string; title?: string }
  ) {
    const contentViewRef = content.createEmbeddedView(null);
    const modalComponentRef = viewContainerRef.createComponent(ModalComponent, {
      injector: this.injector,
      projectableNodes: [[...contentViewRef.rootNodes]],
    });
    if (options) {
      modalComponentRef.instance.size = options.size;
      modalComponentRef.instance.title = options.title;
    }
    modalComponentRef.instance.closeEvent.subscribe(() =>
      this.closeModal(modalComponentRef)
    );
    modalComponentRef.instance.submitEvent.subscribe(() =>
      this.submitModal(modalComponentRef)
    );
    this.document.body.appendChild(modalComponentRef.location.nativeElement);
    contentViewRef.detectChanges();
    return modalComponentRef;
  }

  closeModal(modalComponentRef: ComponentRef<ModalComponent>) {
    modalComponentRef.destroy();
  }

  submitModal(modalComponentRef: ComponentRef<ModalComponent>) {
    modalComponentRef.destroy();
  }
}

/**
 * Older stuff goes down here
 */

// import {
//   ComponentFactoryResolver,
//   Inject,
//   Injectable,
//   Injector,
//   TemplateRef,
// } from '@angular/core';
// import { ModalComponent } from '../modal.component';
// import { Subject } from 'rxjs';
// import { DOCUMENT } from '@angular/common';

// @Injectable({
//   providedIn: 'root',
// })
// export class ModalService {
//   private modalNotifier?: Subject<string>;

//   constructor(
//     private resolver: ComponentFactoryResolver,
//     private injector: Injector,
//     @Inject(DOCUMENT) private document: Document
//   ) {}

//   open(content: TemplateRef<any>, options?: { size?: string; title?: string }) {
//     const modalComponentFactory =
//       this.resolver.resolveComponentFactory(ModalComponent);
//     const contentViewRef = content.createEmbeddedView(null);
//     const modalComponent = modalComponentFactory.create(this.injector, [
//       contentViewRef.rootNodes,
//     ]);

//     modalComponent.instance.size = options?.size;
//     modalComponent.instance.title = options?.title;
//     modalComponent.instance.closeEvent.subscribe(() => this.closeModal());
//     modalComponent.instance.submitEvent.subscribe(() => this.submitModal());

//     modalComponent.hostView.detectChanges();

//     this.document.body.appendChild(modalComponent.location.nativeElement);

//     this.modalNotifier = new Subject();
//     return this.modalNotifier.asObservable();
//   }

//   closeModal() {
//     this.modalNotifier?.complete();
//   }

//   submitModal() {
//     this.modalNotifier?.next('submit');
//     this.closeModal();
//   }
// }
