import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Layout1Component } from './layouts/layout1/layout1.component';
import { Layout2Component } from './layouts/layout2/layout2.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [

    // { path: '',   redirectTo: 'dashboard',   pathMatch: 'full' }, 
    { path: '',   component: Layout1Component,
      children: [
          { path: '', loadChildren: './layouts/layout.module#LayoutModule' },
          { path: 'user-profile', component: UserProfileComponent }
          ]
    },

     { path: '',   component: Layout2Component,
      children: [
        //  { path: '/signin', component: SigninComponent },
        // { path: '/signup', component : SignupComponent},
         { path: '', loadChildren: './auth/auth.module#AuthModule' },
          ]
    },
        
    
    { path: '**',  redirectTo: 'dashboard' }
  ];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
