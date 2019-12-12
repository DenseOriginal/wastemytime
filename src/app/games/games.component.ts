import { Component, OnInit } from '@angular/core';

interface IGame {
  title: string,
  desc: string,
  link: string
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  gamesCollection: IGame[] = [
    {
      title: 'Higher Or Lower',
      desc: 'Just Higher Or Lower',
      link: 'higherOrLower'
    },
    {
      title: 'Memory Game',
      desc: 'Classic Memory Game',
      link: 'memory'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
