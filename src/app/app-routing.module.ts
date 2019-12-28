import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FleurComponent } from './fleur/fleur.component';

const routes: Routes = [
  { path: 'fleur', component: FleurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }