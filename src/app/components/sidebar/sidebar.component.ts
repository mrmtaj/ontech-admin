import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/orders', title: 'Orders',  icon:'education_atom', class: '' },
    { path: '/transactions', title: 'Transactions',  icon:'location_map-big', class: '' },
    { path: '/customers', title: 'Manage Customers',  icon:'users_single-02', class: '' },
    { path: '/products', title: 'Product List',  icon:'design_bullet-list-67', class: '' },
    { path: '/users', title: 'User Management',  icon:'text_caps-small', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
