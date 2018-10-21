import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';

import { Layout1Component } from './layouts/layout1/layout1.component';
import { Layout2Component } from './layouts/layout2/layout2.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    Layout1Component,
    Layout2Component,
    UserProfileComponent

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
