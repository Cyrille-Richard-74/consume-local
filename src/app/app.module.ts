import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/partials/footer/footer.component';
import { HeaderComponent } from './core/partials/header/header.component';
import { NavComponent } from './core/partials/nav/nav.component';
import { TopbarComponent } from './core/partials/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopbarComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
