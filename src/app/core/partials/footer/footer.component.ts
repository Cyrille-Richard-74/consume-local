import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="d-flex justify-content-center bg-dark">
        <span class="footer_content">&copy; 2023 Cyrille Richard</span>
      </div>
  `,
  styles: [`
    .footer_content {
      color: lightgrey;
    }
  `]
})
export class FooterComponent {

}
