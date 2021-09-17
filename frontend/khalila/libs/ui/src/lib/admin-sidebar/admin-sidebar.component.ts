import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'khalila-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss'],
})
export class AdminSidebarComponent {
  @ViewChild('sidebar') sidebar: ElementRef;
  @Input() logoUrl: string;
  @Input() dashList: any;
  @Input() logo: string;
  show = false;

  constructor(private route: Router) {}

  changeRoute(route: string) {
    this.route.navigate([`/${route}`]); // navigate to other page
    this.show = false;
  }

  openSidebar(event: Event) {
    this.show = !this.show;
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: Event) {
    if (this.sidebar.nativeElement.contains(event.target)) return;
    this.show = false;
  }
}
