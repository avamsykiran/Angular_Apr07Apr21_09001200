import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './hrm-shared/auth.guard';
import { DashboardComponent } from './hrm-shared/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'depts',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () => import('./depts/depts.module').then(m => m.DeptsModule)
  },
  {
    path: 'emps',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () => import('./emps/emps.module').then(m => m.EmpsModule)
  },
  { path: '', pathMatch: 'full', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
