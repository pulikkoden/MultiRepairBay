import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiRepairBayConfigComponent } from './multi-repair-bay-config/multi-repai-bay-config.component';

const routes: Routes = [
  {path:'multirepairbay', component:MultiRepairBayConfigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
