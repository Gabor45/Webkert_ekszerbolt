import { Component } from '@angular/core';
import {FormControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  fullname = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true
  });
  username = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true
  });
  lowerCaseValidator: ValidatorFn = (control) => /[a-z]/.test(control.value) ? null : {lowerCase: true};
  upperCaseValidator: ValidatorFn = (control) => /[A-Z]/.test(control.value) ? null : {upperCase: true};
  numberValidator: ValidatorFn = (control) => /[0-9]/.test(control.value) ? null : {number: true};
  specialCharValidator: ValidatorFn = (control) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(control.value) ? null : {specialChar: true};
  lessMoreSignValidator: ValidatorFn = (control) => /[<>]/.test(control.value) ? {lessMoreSign: true} : null;

  password = new FormControl('', {
    validators: [Validators.required, this.lowerCaseValidator, this.upperCaseValidator,
      this.numberValidator, this.specialCharValidator, Validators.minLength(8), this.lessMoreSignValidator],
    nonNullable: true
  });

  passwordMatchValidator: ValidatorFn = (control) => control.value === this.password.value ? null : {passwordMatch: {value: true}};

  passwordRepeat = new FormControl('', {
    validators: [Validators.required, this.passwordMatchValidator],
    nonNullable: true
  });

 /* constructor(private auth: AuthService, private data: DataService, private router: Router) {
    this.limitErrorCount();
    this.password.valueChanges.subscribe(this.limitErrorCount);
    this.password.statusChanges.subscribe(() => this.passwordRepeat.updateValueAndValidity());
  }

  limitErrorCount = () => {
    if (!this.password.errors)
      return;

    const errorKeys = Object.keys(this.password.errors);

    const limitedErrors: ValidationErrors = {};
    let key = errorKeys[0];
    limitedErrors[key] = this.password.errors[key];

    this.password.setErrors(limitedErrors);
  }

  async onRegisterPressed(): Promise<void> {
    let exists = await this.data.checkUserdata(this.email.value, this.username.value);


    if (exists.username) {
      this.username.setErrors({...this.username.errors, exists: true});
    } else if (this.username.errors) {
      delete this.username.errors['exists'];
    }

    this.limitErrorCount();
    this.fullname.markAsDirty();
    this.username.markAsDirty();
    this.password.markAsDirty();
    this.passwordRepeat.markAsDirty();

    if (this.fullname.invalid || this.username.invalid || this.email.invalid || this.password.invalid || this.passwordRepeat.invalid)
      return;

    await this.auth.register(this.password.value);
    await this.data.uploadUserdata({
      fullname: this.fullname.value,
      username: this.username.value,
      email: this.email.value
    });

    alert("An email has been sent to your email address.\nPlease verify your email address to continue.");

    this.router.navigate(['/']);

  }*/
  onRegisterPressed(){

  }
}
