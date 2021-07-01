import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MultiplesComponent } from './multiples/multiples.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MultiplesSolutionComponent } from './multiples/multiples-solution.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MultiplesComponent,
    MultiplicationComponent,
    DivisionComponent,
    WelcomeComponent,
    MultiplesSolutionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
