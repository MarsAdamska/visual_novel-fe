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
      url: 'assets/sprites/protag.png',
      position: 'left'
    },
    {
      id: 'npc1',
      name: 'Npc1',
      url: 'assets/sprites/npc1.png',
      position: 'right'
    }
  ];

  @Input() backgroundUrl?: string;

  get backgroundStyle(): string | undefined {
    if (!this.backgroundUrl) {
      return undefined
    }
    return `url(${this.backgroundUrl})`; 
  }

}
