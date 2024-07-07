import {Component} from '@angular/core';
import {TableComponent} from '../../components/table/table.component';
import {Employee, Inventory} from "../../components/table/table.types";
import {TableHeaderDirective, TableRowDirective} from "../../components/table/table.directive";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-table-page',
  standalone: true,
  imports: [TableComponent, TableHeaderDirective, CommonModule, TableRowDirective],
  templateUrl: './table-page.component.html',
  styleUrl: './table-page.component.css',
})
export class TablePageComponent {
  employees: Employee[] = [
    {firstName: 'Employee', lastName: 'One'},
    {firstName: 'Employee', lastName: 'Two'},
    {firstName: 'Employee', lastName: 'Three'},
    {firstName: 'Employee', lastName: 'Four'},
    {firstName: 'Employee', lastName: 'Five'},
  ];

  inventory: Inventory[] = [
    {
      plu: 110,
      supplier: 'X Corp',
      name: 'Table extender',
      inStock: 500,
      price: 50,
      currency: 'GBP',
    },
    {
      plu: 120,
      supplier: 'X Corp',
      name: 'Heated toilet seat',
      inStock: 0,
      price: 80,
      currency: 'GBP',
    },
    {
      plu: 155,
      supplier: 'Y Corp',
      name: 'Really good pencil',
      inStock: 1,
      price: 8000,
      currency: 'AUD',
    },
  ];

  purchaseItem(plu: number) {
    console.log('handle purchase for', plu);
  }
}
