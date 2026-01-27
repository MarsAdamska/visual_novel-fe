import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Scene } from './scene/scene';
import { SpriteComponent } from './sprite/sprite';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App,
    Scene,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpriteComponent
],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
