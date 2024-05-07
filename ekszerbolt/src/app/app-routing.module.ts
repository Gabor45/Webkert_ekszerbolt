import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from "./register-page/register-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import { MainPageNecklaceComponent} from "./main-page-necklace/main-page-necklace.component";
import { MainPageWatchComponent} from "./main-page-watch/main-page-watch.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'main-page', component: MainPageComponent},
  { path: 'necklace', component: MainPageNecklaceComponent},
  { path: 'watch', component: MainPageWatchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
