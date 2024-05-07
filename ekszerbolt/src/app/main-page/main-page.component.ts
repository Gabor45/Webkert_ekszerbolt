import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private authService: AuthService, private router : Router) {
  }

  async logout():Promise<void> {
    try {
      await this.authService.logout();
      await this.router.navigate(['']);
    } catch (error) {
      console.error('Valami hiba történt a kijelentkezés során', error);
    }
  }

}
