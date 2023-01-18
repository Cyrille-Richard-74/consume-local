import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="pt-2 pb-2">
      <div class="container">
        <button class="btn btn-meat">Viandes</button>
        <button class="btn btn-vegetable">Légumes</button>
        <button class="btn btn-fruit">Fruits</button>
        <button class="btn btn-seafood">Fruits de mer</button>
        <button class="btn btn-cheese">Fromages</button>
        <button class="btn btn-regional">Produits régionaux</button>
        <button class="btn btn-receipe">Recettes</button>
        <button class="btn btn-map">Localiser les producteurs</button>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      background-color: #E7E1F0;
    }
    .btn-meat, .btn-vegetable, .btn-fruit, .btn-seafood, .btn-cheese, .btn-regional, .btn-receipe, .btn-map {
      color: black;
      width: 160px;
      font-size: 12px;
      &:hover {
        color: white;
      }
      &:before {
        content: "";
        display: block;
        height: 40px;
      }
    }
    .btn-meat {
      &:hover {
        background-color: #E36851;
      }
      &:before {
        background: url("/assets/images/icons/meat_black_30.png") no-repeat;
        background-position: bottom 0px right 35px;
      }
      &:hover:before {
        background: url("/assets/images/icons/meat_white_30.png") no-repeat;
        background-position: bottom 0px right 35px;
      }
    }
    .btn-vegetable {
      &:hover {
        background-color: #5CB396;
      }
      &:before {
        background: url("/assets/images/icons/vegetable_black_30.png") no-repeat;
        background-position: bottom 0px right 35px;
      }
      &:hover:before {
        background: url("/assets/images/icons/vegetable_white_30.png") no-repeat;
        background-position: bottom 0px right 35px;
      }
    }
    .btn-fruit {
      &:hover {
        background-color: #B2B748;
      }
      &:before {
        background: url("/assets/images/icons/fruit_black_30.png") no-repeat;
        background-position: bottom 0px right 44px;
      }
      &:hover:before {
        background: url("/assets/images/icons/fruit_white_30.png") no-repeat;
        background-position: bottom 0px right 44px;
      }
    }
    .btn-seafood {
      &:hover {
        background-color: #6082A5;
      }
      &:before {
        background: url("/assets/images/icons/seafood_black_30.png") no-repeat;
        background-position: bottom 0px right 38px;
      }
      &:hover:before {
        background: url("/assets/images/icons/seafood_white_30.png") no-repeat;
        background-position: bottom 0px right 38px;
      }
    }
    .btn-cheese {
      &:hover {
        background-color: #50acba;
      }
      &:before {
        background: url("/assets/images/icons/cheese_black_30.png") no-repeat;
        background-position: bottom 0px right 44px;
      }
      &:hover:before {
        background: url("/assets/images/icons/cheese_white_30.png") no-repeat;
        background-position: bottom 0px right 44px;
      }
    }
    .btn-regional {
      &:hover {
        background-color: #D1BFA5;
      }
      &:before {
        background: url("/assets/images/icons/regional_black_30.png") no-repeat;
        background-position: bottom 0px right 45px;
      }
      &:hover:before {
        background: url("/assets/images/icons/regional_white_30.png") no-repeat;
        background-position: bottom 0px right 45px;
      }
    }
    .btn-receipe {
      &:hover {
        background-color: #AEDED7;
      }
      &:before {
        background: url("/assets/images/icons/regional_black_30.png") no-repeat;
        background-position: bottom 0px right 44px;
      }
      &:hover:before {
        background: url("/assets/images/icons/regional_white_30.png") no-repeat;
        background-position: bottom 0px right 44px;
      }
    }
    .btn-map {
      &:hover {
        background-color: #E3983A;
      }
      &:before {
        background: url("/assets/images/icons/map_black_30.png") no-repeat;
        background-position: bottom 0px right 40px;
      }
      &:hover:before {
        background: url("/assets/images/icons/map_white_30.png") no-repeat;
        background-position: bottom 0px right 40px;
      }
    }
  `]
})
export class NavComponent {

}
