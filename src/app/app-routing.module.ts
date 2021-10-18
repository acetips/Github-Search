import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RepComponent } from './rep/rep.component';

const routes: Routes = [
  { path:'profiles', component: ProfileComponent},
  { path: 'repo',component:RepComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
