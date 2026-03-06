import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.html',
  styleUrl: './sprite.css'
})
export class SpriteComponent {

  @Input() sprite!: string;
  @Input() position!: string;

}


/*import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sprite',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './sprite.html',
  styleUrls: ['./sprite.css']
})
export class SpriteComponent {
  @Input() id?: string;
  @Input() url?: string;
  @Input() name?: string;
  //@Input() position?: 'left' | 'center' | 'right'; 
   @Input() position?: string;
}
*/