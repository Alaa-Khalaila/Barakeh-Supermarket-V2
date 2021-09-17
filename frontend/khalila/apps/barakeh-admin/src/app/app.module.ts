import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { DashboardsComponent } from './pages/dashboards/dashboards.component';
import { UiModule } from '@khalila/ui';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'dashboards',
        component: DashboardsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [AppComponent, ShellComponent, DashboardsComponent],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
