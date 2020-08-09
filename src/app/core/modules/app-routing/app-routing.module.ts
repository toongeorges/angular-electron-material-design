import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from 'app/page/welcome/welcome.component';
import { ButtonComponent } from 'app/page/button/button.component';
import { ButtonToggleComponent } from 'app/page/button-toggle/button-toggle.component';
import { IconComponent } from 'app/page/icon/icon.component';
import { MenuComponent } from 'app/page/menu/menu.component';
import { SidenavComponent } from 'app/page/sidenav/sidenav.component';
import { ToolbarComponent } from 'app/page/toolbar/toolbar.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'icon', component: IconComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
