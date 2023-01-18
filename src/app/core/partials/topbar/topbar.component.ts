import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-dark bg-dark pt-3 pb-3">
      <div class="container-fluid d-flex justify-content-evenly">
        <div class="language">
          <a class="navbar-brand" href="#">
            <img src="/assets/images/flags/france-flag.png" alt="Choix de la langue française" width="24" height="20">
          </a>
          <a class="navbar-brand" href="#">
            <img src="/assets/images/flags/united-kingdom-flag.png" alt="choix de la langue anglaise" width="24" height="20">
          </a>
        </div>
        <div class="login d-flex">
          <a class="navbar-brand d-flex align-items-center" href="#">
            <span class="material-icons">account_circle</span>
            <span class="header_login_title ms-2">Se connecter</span>
          </a>  
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .material-icons, .header_login_title {
      color: lightgrey;
    }
    .header_login_title {
      font-size: 14px;
    }
  `]
})
export class TopbarComponent {

}
