import {inject, Injectable, Optional} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BehaviorSubject, EMPTY, map, Observable, Subscription} from 'rxjs';
import firebase from "firebase/compat";
import {UserData} from "../models/user-data";
import {
  Auth,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, authState
} from "@angular/fire/auth";
import {AuthState} from "../models/auth-state";
import {traceUntilFirst} from "@angular/fire/performance";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly userDisposable: Subscription|undefined;
  public readonly user: Observable<User | null> = EMPTY;
  public isAuth = new BehaviorSubject<boolean>(false);


  showLoginButton = false;
  showLogoutButton = false;

  constructor(@Optional() private auth: Auth) {
    if (auth) {
      this.user = authState(this.auth);
      this.userDisposable = authState(this.auth).pipe(
        traceUntilFirst('auth'),
        map(u => !!u)
      ).subscribe(isLoggedIn => {
        this.showLoginButton = !isLoggedIn;
        this.showLogoutButton = isLoggedIn;
      });
    }
  }

  ngOnInit(): void {
    this.isAuth.next(false);
  }

  ngOnDestroy(): void {
    if (this.userDisposable) {
      this.userDisposable.unsubscribe();
    }
  }

  async login(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(this.auth, email, password);
    this.isAuth.next(true);
  }

  async register(email: string, password: string): Promise<void> {
    await createUserWithEmailAndPassword(this.auth, email, password);
    this.isAuth.next(true);
  }
  async logout() {
    this.isAuth.next(false);
    return await signOut(this.auth);
  }
}
