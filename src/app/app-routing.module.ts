import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiRepairBayComponent } from './multi-repair-bay/multi-repair-bay.component';

const routes: Routes = [
  {path:'multirepairBay', component:MultiRepairBayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
