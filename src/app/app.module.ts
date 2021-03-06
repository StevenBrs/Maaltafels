import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SettingsComponent } from './settings/settings.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { ScoreComponent } from './score/score.component';
import { FooterComponent } from './footer/footer.component' ;

import { SettingsService } from './settings.service';
import { ScoreService } from './score.service';
/*
import { Routes, RouterModule } from '@angular/router';
const routes : Routes = [
    { path: '' , redirectTo: 'settings' , pathMatch: 'full' },
    { path: 'settings' , component: SettingsComponent },
    { path: 'excercises' , component: ExcercisesComponent},
    { path: 'score' , component: ScoreComponent}
];
*/
import { AppRoutingModule } from './app-routing.module';

@NgModule({
//  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, SettingsComponent, ExcercisesComponent, ScoreComponent, FooterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SettingsService, ScoreService]
})
export class AppModule { }

