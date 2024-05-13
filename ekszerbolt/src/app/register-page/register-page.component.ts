import {Component, EventEmitter, OnDestroy, Output, output} from '@angular/core';
import {FormControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import { UserData } from "../models/user-data";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent{

  fullname = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true
  });
  email = new FormControl('', {
    validators: [Validators.required,Validators.email],
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

 constructor(private authService: AuthService, private router: Router, private dataService: DataService) {
  }

  async onRegisterPressed(): Promise<void> {
   console.log(this.fullname.value)
    this.fullname.markAsDirty();
    this.email.markAsDirty();
    this.password.markAsDirty();
    this.passwordRepeat.markAsDirty();

    if (this.fullname.invalid || this.email.invalid || this.password.invalid || this.passwordRepeat.invalid)
      return;

    await this.authService.register(this.email.value,this.password.value);
    const user: UserData= { email: this.email.value, fullname:this.fullname.value }
    await this.dataService.create(user).then(() => {
      console.log("User added");
    }).catch((error) => {
      console.error(error);
    });
    alert("Sikeres regisztráció")
    await this.router.navigate(['']);
  }
}
