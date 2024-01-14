import {
  Component,
  ComponentRef,
  TemplateRef,
  ViewContainerRef,
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

  constructor(
    private modalService: ModalService,
    private viewContainerRef: ViewContainerRef
  ) {}

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.open(
      modalTemplate,
      this.viewContainerRef,
      { size: 'lg', title: 'Foo' }
    );
  }

  // openModal(modalTemplate: TemplateRef<any>) {
  //   this.modalService
  //     .open(modalTemplate, { size: 'lg', title: 'Foo' })
  //     .subscribe((action) => console.log('Action', action));
  // }
}
