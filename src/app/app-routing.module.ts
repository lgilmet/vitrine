import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FleurComponent } from './fleur/fleur.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'fleurs', component: FleurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }