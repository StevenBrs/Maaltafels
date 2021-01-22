import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsComponent } from './settings/settings.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { ScoreComponent } from './score/score.component';

const routes : Routes = [
    { path: '' , redirectTo: 'settings' , pathMatch: 'full' },
    { path: 'settings' , component: SettingsComponent },
    { path: 'excercises' , component: ExcercisesComponent},
    { path: 'score' , component: ScoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }