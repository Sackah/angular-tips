import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../services/clients.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.css',
})
export class ClientsListComponent {
  @Input({
    transform: (clients: Client[]) =>
      clients.map((c) => ({ client: c, isChecked: false })),
  })
  clients!: {
    client: Client;
    isChecked: boolean;
  }[];

  selectClient(event: MouseEvent, client: Client) {
    console.log((event.target as HTMLInputElement).checked, client);
  }
}
