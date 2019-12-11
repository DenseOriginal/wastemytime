import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from "./games-routing.module";
import { GamesComponent } from './games.component';
import { FormsModule } from "@angular/forms";
import { HigherOrLowerComponent } from './higher-or-lower/higher-or-lower.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { CardComponent } from './memory-game/card.component';


@NgModule({
  declarations: [ 
    GamesComponent,
    HigherOrLowerComponent,
    MemoryGameComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    FormsModule,
  ]
})
export class GamesModule { }
