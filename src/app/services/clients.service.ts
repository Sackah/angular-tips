import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Client {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    sreet: string;
    city: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private http = inject(HttpClient);
  private clients$ = new BehaviorSubject<Client[] | undefined>(undefined);
  clients = this.clients$.asObservable();

  constructor() {}

  fetch() {
    return this.http.get<Client[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  set(clients: Client[]) {
    this.clients$.next(clients);
  }
}
