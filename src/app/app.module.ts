import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SettingsService } from './settings.service';
import { SettingsComponent } from './settings/settings.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { ScoreComponent } from './score/score.component';

import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component' ;
const routes : Routes = [
    { path: '' , redirectTo: 'settings' , pathMatch: 'full' },
    { path: 'settings' , component: SettingsComponent },
    { path: 'excercises' , component: ExcercisesComponent},
    { path: 'score' , component: ScoreComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, SettingsComponent, ExcercisesComponent, ScoreComponent, FooterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SettingsService]
})
export class AppModule { }

