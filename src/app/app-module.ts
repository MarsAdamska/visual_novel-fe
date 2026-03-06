import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app';
import { SpriteComponent } from './sprite/sprite';

@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    SpriteComponent,
],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
})
export class AppModule { }
