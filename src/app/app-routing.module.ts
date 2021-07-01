import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/page-not-found.component';
import { DivisionComponent } from './division/division.component';
import { MultiplesComponent } from './multiples/multiples.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'domu', component: WelcomeComponent },
  { path: 'nasobky', component: MultiplesComponent },
  { path: 'nasobeni', component: MultiplicationComponent },
  { path: 'deleni', component: DivisionComponent },
  { path: '', redirectTo: 'domu', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
