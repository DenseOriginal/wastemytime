import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICard } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-card',
  template: `
    <div class="card" data-id="{{ data.id }}" (click)="cardClicked()">
      <div class="inside" [class.picked]="isPicked" [class.matched]="isMatched">
        <div class="front">
          <img [src]="data.img" [alt]="'+ data.name +'" />
        </div>
        <div class="back">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/codepen-logo.png" alt="Codepen" />
        </div>
      </div>
    </div>
  `,
})
export class CardComponent implements OnInit {
  @Input() data: ICard;
  @Output() onCardClick = new EventEmitter<this>();
  extraClass: string;
  isPicked = true;
  isMatched = false;

  cardClicked() {
    if(this.isPicked || this.isMatched) return;
    this.onCardClick.emit(this);
  }

  callMethod() {
    console.log();
  }

  constructor() { }

  ngOnInit() {
  }
}
