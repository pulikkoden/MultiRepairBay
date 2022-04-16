import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiRepaiBayConfigComponent } from './multi-repai-bay-config/multi-repai-bay-config.component';

const routes: Routes = [
  {path:'multirepairbay', component:MultiRepaiBayConfigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
