import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="header pt-3">
        <div class="favorite-cart d-flex justify-content-end me-5">
          <div class="mt-2">
            <button class="btn icon-button position-relative">
              <span class="material-icons">favorite</span>
              <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger mt-1">
                10
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
            <button class="btn icon-button position-relative">
              <span class="material-icons">shopping_cart</span>
              <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger mt-1">
                2
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    
  `,
  styles: [`
  .material-icons {
    font-size: 32px;
    color: lightgrey;
  }
  .header {
      height: 450px;
      background-image: url("/assets/images/background/header_background.png");
    }
  `]
})
export class HeaderComponent {

}
