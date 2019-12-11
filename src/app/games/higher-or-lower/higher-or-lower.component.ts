import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-higher-or-lower',
  templateUrl: './higher-or-lower.component.html',
  styleUrls: ['./higher-or-lower.component.scss']
})
export class HigherOrLowerComponent implements OnInit {
  textFieldValue: string = "";
  randomNumber: number;
  outputMessage: string;
  correct: boolean;
  tries: number = 0;
  highestNumber: number = 10000;

  constructor() {
    this.randomNumber = Math.floor(Math.random() * this.highestNumber);
  }

  onButtonTap(): void {
    if (parseFloat(this.textFieldValue) === this.randomNumber) {
      this.outputMessage = "Correct";
      this.correct = true
      return;
    }
    if (parseFloat(this.textFieldValue) > this.highestNumber) { this.outputMessage = `The number has to be less than ${this.highestNumber}`; return}
    if (parseFloat(this.textFieldValue) < 0) { this.outputMessage = `The number has to be greater than 0`; return}
    if (this.textFieldValue === '') { this.outputMessage = `Please input a number`; return}
    this.outputMessage = parseFloat(this.textFieldValue) > this.randomNumber ? 'Lower' : 'Higher';
    this.tries++;
  }

  reset(): void {
    this.randomNumber = Math.floor(Math.random() * 10000);
    this.correct = false;
    this.textFieldValue = "";
    this.outputMessage = "";
    this.tries = 0;
  }
  ngOnInit() {
  }

}
