import { Component } from '@angular/core';

@Component({
  selector: 'admin-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  logo = '../../assets/images/logo.png';

  dashList = [
    {
      name: 'Dashboards',
      icon: '../../../assets/icons/barakeh-admin-icons.svg#house',
      route: 'dashboards',
    },
    {
      name: 'Products',
      icon: '../../../assets/icons/barakeh-admin-icons.svg#open-box',
    },
    {
      name: 'Categories',
      icon: '../../../assets/icons/barakeh-admin-icons.svg#list',
    },
    {
      name: 'Orders',
      icon: '../../../assets/icons/barakeh-admin-icons.svg#shopping-cart',
    },
    {
      name: 'Users',
      icon: '../../../assets/icons/barakeh-admin-icons.svg#user',
    },
    {
      name: 'Logout',
      icon: '../../../assets/icons/barakeh-admin-icons.svg#logout',
    },
  ];
}
