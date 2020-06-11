import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '', component: LoginComponent }
];

export const AppRouting = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
