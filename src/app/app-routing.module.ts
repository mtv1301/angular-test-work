import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {TicketsComponent} from "./tickets/tickets.component";
import {UserDetailComponent} from './user-detail/user-detail.component';
import {HomePageComponent} from "./home-page/home-page.component";
import {UserEditComponent} from "./user-edit/user-edit.component";

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent, pathMatch: 'full'},
  {path: 'user', component: UserComponent, pathMatch: 'full'},
  {path: 'tickets', component: TicketsComponent, pathMatch: 'full'},
  {path: 'detail/:id', component: UserDetailComponent, pathMatch: 'full'},
  {path: 'edit/:id', component: UserEditComponent, pathMatch: 'full'}

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
