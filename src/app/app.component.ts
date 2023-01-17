import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-topbar></app-topbar>
    <app-header></app-header>
    <app-nav></app-nav>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'from-producer-to-consumer-front';
}
