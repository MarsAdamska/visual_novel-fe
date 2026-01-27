import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene',
  standalone: false,
  templateUrl: './scene.html',
  styleUrls: ['./scene.css'],
})

export class Scene implements OnInit {
  ngOnInit(): void {
  }

  sprites = [
    {
      id: 'protag',
      name: 'Protag',
      url: 'img/sprite/protag.jpg',
      position: 'left'
    },
    {
      id: 'protag',
      name: 'Protag',
      url: 'img/sprite/protag.jpg',
      position: 'right'
    },
    /*{
      id: 'npc1',
      name: 'Npc1',
      url: 'img/sprite/npc1.png',
      position: 'right'
    }*/
  ];

  @Input() backgroundUrl?: string;

  get backgroundStyle(): string | undefined {
    if (!this.backgroundUrl) {
      return undefined
    }
    return `url(${this.backgroundUrl})`; 
  }

}
