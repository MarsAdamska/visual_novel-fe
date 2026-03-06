import { Component } from '@angular/core';
import { Choice } from '../choice-model';
import { SpriteComponent } from "../sprite/sprite";
import { DialogueComponent } from "../dialogue/dialogue";
import { ChoiceComponent } from "../choice/choice";

@Component({
  selector: 'app-scene',
  templateUrl: './scene.html',
  styleUrls: ['./scene.css'],
  imports: [SpriteComponent, DialogueComponent, ChoiceComponent]
})
export class SceneComponent {

  background = "'img/scene/bg/room.jpg'";

  //characterSprite = "assets/sprites/character.png";

  sprites = [
    {
      id: 'protag',
      name: 'Protag',
      url: 'img/sprite/sprite1.png',
      position: 'left'
    },
    {
      id: 'npc',
      name: 'Protag',
      url: 'img/sprite/sprite2.png',
      position: 'right'
    }
  ];

  dialogueText = "Cosa posso fare per te?";

  choices: Choice[] = [
    new Choice("Come ti chiami?", "scene2"),
    new Choice("Dov'è il bagno?", "scene3")
  ];
characterSprite!: string;
leftSprite!: string;
rightSprite!: string;

  onChoiceSelected(choice: Choice) {
    console.log("Scelta:", choice);
  }

}

/*import { Component, Input } from '@angular/core';
import { Choice } from '../choice/choice';
import { ChoiceModel } from '../choice-model';
import { SpriteComponent } from '../sprite/sprite';
import { Dialogue } from '../dialogue/dialogue';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-scene',
  standalone: true,
  imports: [CommonModule, Choice, SpriteComponent, Dialogue],
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
      text: 'Cosa vuoi comprare?',
      background: 'img/scene/bg/room.jpg',
      choices: [
        new ChoiceModel('20 granate', 'esplodi'),
        new ChoiceModel('Niente', 'esci')
      ]
    },
    light: {
      text: 'La stanza è vuota.',
      background: 'img/scene/bg/room_light.jpg',
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
}*/
