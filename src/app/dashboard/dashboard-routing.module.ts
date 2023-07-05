import { WrappedNodeExpr } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { DashbaordComponent } from './components/dashbaord/dashbaord.component';
import { InfoComponent } from './components/info/info.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [

{
     path: '',
     component: WrapperComponent,
     children: [
        {
            path: 'dashboard', //* --> this is localhoast: 4200/dashboard 
            component: DashbaordComponent
        },
        {
            path: 'info', //* --> this is localhoast: 4200/info 
            component: InfoComponent
        },
        {
            path: 'user', //* --> this is localhoast: 4200/user 
            component: UserComponent
        }
     ]
},
{
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }