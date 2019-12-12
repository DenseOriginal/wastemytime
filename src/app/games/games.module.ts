import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from "./games-routing.module";
import { GamesComponent } from './games.component';
import { FormsModule } from "@angular/forms";
import { HigherOrLowerComponent } from './higher-or-lower/higher-or-lower.component';
import { MemoryGameComponent, CongratsModal } from './memory-game/memory-game.component';
import { CardComponent } from './memory-game/card.component';
import { MaterialModule } from "../shared/material.module";


@NgModule({
  declarations: [ 
    GamesComponent,
    HigherOrLowerComponent,
    MemoryGameComponent,
    CardComponent,
    CongratsModal
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    FormsModule,
    MaterialModule
  ],
  entryComponents: [
    CongratsModal
  ]
})
export class GamesModule { }
