import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChoiceModel } from '../choice-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choice',
  standalone: true,          
  imports: [CommonModule],
  templateUrl: './choice.html',
  styleUrl: './choice.css',
})
export class Choice {
  @Input() choices: ChoiceModel[] = [];
  @Output() choiceSelected = new EventEmitter<ChoiceModel>();

  selectChoice(choice: ChoiceModel) {
    this.choiceSelected.emit(choice);
  }
}
