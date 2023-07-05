import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { DashbaordComponent } from './components/dashbaord/dashbaord.component';
import { InfoComponent } from './components/info/info.component';
import { UserComponent } from './components/user/user.component'
import {MatSidenavModule} from '@angular/material/sidenav'; //! side navigation 
import {MatIconModule} from '@angular/material/icon'; //! material icons 
import {MatListModule} from '@angular/material/list'; //! list module 
import {MatToolbarModule} from '@angular/material/toolbar'; //! toolbar module 

//* all the components are being loaded inot this through the CLI and the lazy loader we implimented 
@NgModule({
  declarations: [
    WrapperComponent,
    DashbaordComponent,
    InfoComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    //! NG materials Modules
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule 
  ]
})
export class DashboardModule { }
