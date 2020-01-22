import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IspComponent } from './modules/isp/isp.component';

const routes: Routes = [
    { path: '', redirectTo: 'isp', pathMatch: 'full' },
    { path: 'isp', component: IspComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
