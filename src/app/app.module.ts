import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './shared/hero/hero.component';
import { AboutComponent } from './shared/about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContactComponent } from './forms/contact/contact.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    NavbarComponent,
    ContactComponent,
    PageNotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
