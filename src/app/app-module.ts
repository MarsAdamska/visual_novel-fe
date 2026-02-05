import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Scene } from './scene/scene';
import { SpriteComponent } from './sprite/sprite';
import { CommonModule } from '@angular/common';
import { Dialogue } from './dialogue/dialogue';
import { Choice } from './choice/choice';
import { ChoiceModel } from './choice-model';

@NgModule({
  declarations: [
  ],
  imports: [
    App,
    BrowserModule,
    AppRoutingModule,
    SpriteComponent,
],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
})
export class AppModule { }
