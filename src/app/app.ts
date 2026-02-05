import { Component, signal } from '@angular/core';
import { Scene } from './scene/scene';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Scene],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('visual_novel-fe');
  bg = 'img/scene/bg1.png';

  currentDialogue: any = null;
}
