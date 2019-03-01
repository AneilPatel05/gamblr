import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'blackjack', loadChildren: './blackjack/blackjack.module#BlackjackPageModule' },
  { path: 'dicepage', loadChildren: './dicepage/dicepage.module#DicepagePageModule' },
  { path: 'slot-game', loadChildren: './slot-game/slot-game.module#SlotGamePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
