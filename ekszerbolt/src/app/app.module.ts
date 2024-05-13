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
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {environment} from "../environments/environment";
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageNecklaceComponent } from './main-page-necklace/main-page-necklace.component';
import { MainPageWatchComponent } from './main-page-watch/main-page-watch.component';
import {getFirestore, provideFirestore} from "@angular/fire/firestore";

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    HomePageComponent,
    HomePageDirectiveDirective,
    RegisterPageDirectiveDirective,
    MainPageComponent,
    MainPageNecklaceComponent,
    MainPageWatchComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      AngularFireAuthModule,
      provideAuth(()=> getAuth()),
      provideFirestore(() => getFirestore())
    ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
