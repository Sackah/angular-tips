import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../guards/users.resolver';

@Component({
  selector: 'app-protected-page',
  template: `<h1>Protected Page</h1>`,
  styles: ``,
})
export class ProtectedPageComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ users }: { users?: User }) =>
      console.log(users)
    );
  }
}
