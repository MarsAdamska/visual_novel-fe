import { Component, Input } from '@angular/core';
import { Choice } from '../choice/choice';
import { ChoiceModel } from '../choice-model';
import { SpriteComponent } from '../sprite/sprite';
import { Dialogue } from '../dialogue/dialogue';


@Component({
  selector: 'app-scene',
  standalone: true,
  imports: [Choice, SpriteComponent, Dialogue],
  templateUrl: './scene.html',
  styleUrls: ['./scene.css'],
})
export class Scene {

  // ===== STATO NARRATIVO =====
  currentNodeId = 'start';

  nodes: Record<string, {
    text: string;
    choices: ChoiceModel[];
    background?: string;
  }> = {
    start: {
      text: 'Ti svegli in una stanza buia.',
      background: 'img/bg/room.jpg',
      choices: [
        new ChoiceModel('Accendi la luce', 'light'),
        new ChoiceModel('Urla aiuto', 'scream')
      ]
    },
    light: {
      text: 'La stanza è vuota.',
      background: 'img/bg/room_light.jpg',
      choices: []
    },
    scream: {
      text: 'Nessuno risponde.',
      choices: []
    }
  };

  get currentNode() {
    return this.nodes[this.currentNodeId];
  }

  onChoiceSelected(choice: ChoiceModel) {
    this.currentNodeId = choice.targetNodeId;
  }

  @Input() backgroundUrl?: string;

  // ===== VISUAL =====
  sprites = [
    {
      id: 'protag',
      name: 'Protag',
      url: 'img/sprite/sprite1.png',
      position: 'left'
    },
    {
      id: 'protag',
      name: 'Protag',
      url: 'img/sprite/sprite2.png',
      position: 'right'
    }
  ];

  get backgroundStyle(): string | undefined {
    return this.currentNode.background
      ? `url(${this.currentNode.background})`
      : undefined;
  }

  get currentDialogue() {
    return {
      spriteId: 'protag',
      speakerName: 'Splimpa',
      text: this.currentNode.text
    };
  }
}
