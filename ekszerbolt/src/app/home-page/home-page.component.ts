import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router} from "@angular/router";
import { DataService} from "../services/data.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent{

  emailmutat:string='';

  email = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true
  });
  password = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true
  });
  errorMessage: string = '';

  constructor(private authService: AuthService, private router : Router, private dt:DataService) { }

  async onLoginPressed(): Promise<void> {
    this.email.markAsDirty();
    this.password.markAsDirty();


    if (this.email.invalid || this.password.invalid)
      return;

   try {
      this.emailmutat=this.email.value;
      await this.authService.login(this.email.value, this.password.value);
      alert("Sikeres belépés");
     await this.router.navigate(['main-page']);
   } catch (error) {
      console.error('Error logging in, Invalid email or password:', error);
      this.errorMessage = 'Nem megfelelő e-mail cím vagy jelszó!';
    }
  }
}
