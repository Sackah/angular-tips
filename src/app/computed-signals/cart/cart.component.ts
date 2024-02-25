import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Vehicle {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  quantity = signal(1);
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);

  selectedVehicle = signal<Vehicle>({ id: 1, name: 'AT-AT', price: 1000 });

  vehicles = signal<Vehicle[]>([]);

  extendedPrice = computed(
    () => this.selectedVehicle().price * this.quantity()
  );

  constructor() {
    this.quantity.update((qty) => qty * 2);
  }

  qtyEffect = effect(() => console.log('Latest quantity', this.quantity()));

  onQuantitySelected(qty: number) {
    this.quantity.set(qty);
  }
}
