import { Component, OnInit, inject } from '@angular/core';
import { Client, ClientsService } from '../../services/clients.service';
import { of, switchMap, tap } from 'rxjs';
import { ClientsListComponent } from '../../components/clients-list/clients-list.component';

@Component({
  selector: 'app-progress-page',
  standalone: true,
  templateUrl: './progress-page.component.html',
  styleUrl: './progress-page.component.css',
  imports: [ClientsListComponent],
})
export class ProgressPageComponent implements OnInit {
  private clientService = inject(ClientsService);
  clientList: Client[] | undefined = undefined;

  ngOnInit() {
    this.clientService.clients
      .pipe(
        switchMap((clients) => {
          if (clients) {
            return of(clients);
          } else {
            return this.clientService
              .fetch()
              .pipe(tap((c) => this.clientService.set(c)));
          }
        })
      )
      .subscribe({
        next: (clients) => {
          this.clientList = clients;
        },
      });
  }

  /**
   * progress stuff
   */
  Progress = Array.from({ length: 3 });
  currentIndex = 0;
  setCurrentIndex(i: number) {
    this.currentIndex = i;
  }
}
