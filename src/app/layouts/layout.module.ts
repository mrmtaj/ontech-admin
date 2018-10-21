import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutRoutes } from './layout.routing';
import { DashboardComponent } from '../dashboard/dashboard.component';
//import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UsersComponent } from '../users/users.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
//import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
  //  ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
   // UserProfileComponent,
    UsersComponent
    //NotificationsComponent,
  ]
})

export class LayoutModule {}
