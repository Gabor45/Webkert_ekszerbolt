import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from "./register-page/register-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import { MainPageNecklaceComponent} from "./main-page-necklace/main-page-necklace.component";
import { MainPageWatchComponent} from "./main-page-watch/main-page-watch.component";
import {AuthGuard} from "@angular/fire/auth-guard";

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'main-page', component: MainPageComponent, canActivate: [AuthGuard]},
  { path: 'necklace', component: MainPageNecklaceComponent, canActivate: [AuthGuard]},
  { path: 'watch', component: MainPageWatchComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
