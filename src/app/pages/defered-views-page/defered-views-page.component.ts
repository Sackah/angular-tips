import { Component, OnInit, inject } from '@angular/core';
import { DeferMainComponent } from '../../defered-views/main/main.component';
import { DirectivesComponent } from '../../directives/directives.component';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { DecoratorsComponent } from '../../decorators/decorators.component';

@Component({
  selector: 'app-defered-views-page',
  standalone: true,
  templateUrl: './defered-views-page.component.html',
  styleUrl: './defered-views-page.component.css',
  imports: [
    DeferMainComponent,
    DirectivesComponent,
    RouterLink,
    DecoratorsComponent,
  ],
})
export class DeferedViewsPageComponent implements OnInit {
  router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe((e)=>{
      // console.log(e)
      if (e instanceof NavigationEnd) {
        console.log(e.url);
      }
    })
  }

  navtosection(){
    this.router.navigate([''], {fragment: 'section'});
  }
}
