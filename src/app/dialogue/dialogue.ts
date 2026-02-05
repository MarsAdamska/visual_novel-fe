import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialogue',
  standalone: true,
  templateUrl: './dialogue.html',
  styleUrls: ['./dialogue.css'],
})
export class Dialogue {
  @Input() dialogue?: {
    spriteId: string;
    speakerName: string;
    text: string;
  };
}
