import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOnlyGuard } from '../hrm-shared/admin-only.guard';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpsListComponent } from './emps-list/emps-list.component';

import { EmpsComponent } from './emps.component';

const routes: Routes = [
  {
    path: '', component: EmpsComponent, children: [
      { path: 'list', component: EmpsListComponent },
      { path: 'new', component: EmpFormComponent,canActivate:[AdminOnlyGuard] },
      { path: 'edit/:id', component: EmpFormComponent,canActivate:[AdminOnlyGuard] },
      { path: '', pathMatch: 'full', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpsRoutingModule { }
