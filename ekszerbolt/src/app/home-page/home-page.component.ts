import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  username = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true
  });
  password = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true
  });
  errorMessage: string = '';
  constructor() { }

  async onLoginPressed(): Promise<void> {
    this.username.markAsDirty();
    this.password.markAsDirty();

    if (this.username.invalid || this.password.invalid)
      return;

   /* try {
      await this.auth.login(this.email.value, this.password.value);
      location.reload();
    } catch (error) {
      console.error('Error logging in, Invalid email or password:', error);
      this.errorMessage = 'Nem megfelelő e-mail cím vagy jelszó!';
    }*/
  }
}
