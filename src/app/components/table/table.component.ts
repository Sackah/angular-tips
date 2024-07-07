import {Component, contentChild, input, TemplateRef, ViewEncapsulation} from '@angular/core';
import {TableHeaderDirective, TableRowDirective} from "./table.directive";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent<TItem extends Record<string, any>> {
  data = input.required<TItem[]>();
  headers = contentChild(TableHeaderDirective, {
    read: TemplateRef
  });
  rows = contentChild(TableRowDirective, {
    read: TemplateRef
  });
}
