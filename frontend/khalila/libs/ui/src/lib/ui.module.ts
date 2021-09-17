import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AdminSidebarComponent],
  exports: [AdminSidebarComponent],
})
export class UiModule {}
