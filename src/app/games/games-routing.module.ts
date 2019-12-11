import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games.component';
import { HigherOrLowerComponent } from './higher-or-lower/higher-or-lower.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';


const routes: Routes = [
  { path: '', component: GamesComponent },
  { path: 'higherOrLower', component: HigherOrLowerComponent },
  { path: 'memory', component: MemoryGameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
