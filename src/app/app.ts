import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('visual_novel-fe');
  bg = 'assets/bg.jpg';
  //bg = 'img/bg.jpg'; -> prova in locale checked
}
