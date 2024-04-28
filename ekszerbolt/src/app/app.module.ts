import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageDirectiveDirective } from './home-page-directive.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterPageDirectiveDirective } from './register-page-directive.directive';
import {MatInputModule} from "@angular/material/input";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    HomePageComponent,
    HomePageDirectiveDirective,
    RegisterPageDirectiveDirective,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        AngularFireModule.initializeApp({
          apiKey: "AIzaSyBuQBBrD_EEZhwxGs5RTphlVShtFVe68DY",
          authDomain: "webkert-ekszerbolt.firebaseapp.com",
          projectId: "webkert-ekszerbolt",
          storageBucket: "webkert-ekszerbolt.appspot.com",
          messagingSenderId: "1035619733144",
          appId: "1:1035619733144:web:26de2f93d061a6906f0aed",
          measurementId: "G-74ZHJBVK9M"
        }),
      AngularFireAuthModule
    ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
