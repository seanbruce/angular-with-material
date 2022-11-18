import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPageOneComponent } from './features/custom-page-one.component';
import { DashboardComponent } from './features/dashboard.component';
import { TableComponent } from './features/table.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'table', component: TableComponent },
  { path: 'custom-page-one', component: CustomPageOneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
