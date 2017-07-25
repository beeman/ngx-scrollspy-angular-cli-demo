import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-layout [navItems]="navItems">
      <router-outlet></router-outlet>
    </app-layout>
  `,
})
export class AppComponent {

  navItems = [
    {
      label: 'Home',
      link: ['/', 'home'],
      fragment: '#home',
    },
    {
      label: 'About Us',
      link: ['/', 'home'],
      fragment: '#about-us',
    },
    {
      label: 'Services',
      link: ['/', 'home'],
      fragment: '#services',
    },
    {
      label: 'Clients',
      link: ['/', 'home'],
      fragment: '#clients',
    },
    {
      label: 'Contact',
      link: ['/', 'home'],
      fragment: '#contact',
    },
  ]

}
