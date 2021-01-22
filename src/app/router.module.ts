import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
    { path: '' , redirectTo: 'settings' , pathMatch: 'full' },
    { path: 'settings' , component: SettingsComponent },
    { path: 'excercises' , component: ExcercisesComponent},
    { path: 'score' , component: ScoreComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
});

export class AppRoutingModule { }