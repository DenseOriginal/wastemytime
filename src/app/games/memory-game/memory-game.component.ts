import { Component, OnInit, Inject } from '@angular/core';
import { ICard } from 'src/app/shared/interfaces';
import { CardComponent } from './card.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-memory-game',
	templateUrl: './memory-game.component.html',
	styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent implements OnInit {
	cards_: ICard[] = [
		{
			name: "php",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
			id: 1,
		},
		{
			name: "css3",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
			id: 2
		},
		{
			name: "html5",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
			id: 3
		},
		{
			name: "jquery",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
			id: 4
		},
		{
			name: "javascript",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
			id: 5
		},
		{
			name: "node",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
			id: 6
		},
		{
			name: "photoshop",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png",
			id: 7
		},
		{
			name: "python",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png",
			id: 8
		},
		{
			name: "rails",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
			id: 9
		},
		{
			name: "sass",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
			id: 10
		},
		{
			name: "sublime",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png",
			id: 11
		},
		{
			name: "wordpress",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png",
			id: 12
		},
	];
	
	constructor(public dialog: MatDialog) { }

	Game = {
		paused: false,
		temp: <CardComponent>null,
		matchedPairs: <number>0,
		cards: <ICard[]>[...this.cards_, ...this.cards_],
		finished: <boolean>false,
		parent: this,

		start: function () {
			this.shuffle(this.cards);
			this.paused = false;
			this.temp = undefined;
			this.finished = true;
			console.log('dsfdf');
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: (array) => {
			var m = array.length, t, i;
			// While there remain elements to shuffle…
			while (m) {
				// Pick a remaining element…
				i = Math.floor(Math.random() * m--);
				// And swap it with the current element.
				t = array[m];
				array[m] = array[i];
				array[i] = t;
			}
			return array;
		},

		handleCardClick: function (e: CardComponent) {
			if (!this.paused) {
				e.isPicked = true;
				if (this.temp) { // If another card is already drawn, check if the two cards match
					if (this.temp.data.id === e.data.id) { // if the two cards is a match
						this.temp.isMatched = true;
						e.isMatched = true;
						this.temp = undefined;
						this.matchedPairs++;
					} else { // If the cards aren't a match
						this.paused = true;
						setTimeout(() => {
							this.temp.isPicked = false;
							e.isPicked = false;
							this.temp = undefined;
							this.paused = false;
						}, 750);
					}
				} else { // If no card is drawn, store the card in temp variable
					this.temp = e;
				}
			}
			if (this.matchedPairs === this.cards.length / 2) { this.finished = true }
		},

		win: function () {
			const modalRef = this.parent.dialog.open(CongratsModal, {
				width: '250px',
				data: {  }
			});
			modalRef.afterClosed().subscribe(result => {
				let doReset = result.restart;
				console.log('The dialog was closed', doReset);
				if(doReset) { this.start() }
			});
		},

		reset: function () {
			this.start();
		}
	}

	ngOnInit() {
		this.Game.start();
	}

}


/// MODAL COMPONENT ///
@Component({
	selector: 'null',
	template: `
	<h1 mat-dialog-title>Congrats</h1>
	<p>Do you want to play again?</p>
	<div mat-dialog-actions>
		<button mat-button (click)="onNoClick()">No Thanks</button>
		<button mat-button [mat-dialog-close]="{ restart: true }" cdkFocusInitial>Ok</button>
	</div>
	`,
})
export class CongratsModal {

	constructor(
		public dialogRef: MatDialogRef<CongratsModal>,
		@Inject(MAT_DIALOG_DATA) public data
	) { }

	onNoClick(): void {
		this.dialogRef.close();
	}

}