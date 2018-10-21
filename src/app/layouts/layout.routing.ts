import { Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsersComponent } from '../users/users.component';

export const LayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'users',   component: UsersComponent },
  ];
