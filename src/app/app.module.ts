import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { CoveohookDirective } from './coveohook.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent,
    SearchComponent,
    SearchboxComponent,
    CoveohookDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
