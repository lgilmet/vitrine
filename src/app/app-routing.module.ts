import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { FleurComponent } from './fleur/fleur.component';
import { HomeComponent } from './home/home.component';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollOffset: [0, 70],
  onSameUrlNavigation: 'reload',

};


const routes: Routes = [
  { path: '', component: FleurComponent},
  { path: 'fleurs', component: FleurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }