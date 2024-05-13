import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import { DataService } from "../services/data.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit,OnChanges{

  @Input() emailmutat='';
  regi:any;
  nev:any;

  constructor(private authService: AuthService, private router : Router, private dataUser: DataService) {
    this.regi=this.dataUser.getData();
  }
  async logout():Promise<void> {
    try {
      await this.authService.logout();
      await this.router.navigate(['']);
    } catch (error) {
      console.error('Valami hiba történt a kijelentkezés során', error);
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes['emailmutat'].currentValue!=null)
    {
      this.regi=changes['emailmutat'].currentValue;
      this.dataUser.setData(this.regi);
    }
  }
  ngOnInit(): void {
    if (this.regi != '') {
      this.dataUser.getUserByEmail(this.regi)
        .subscribe(userData => {
          this.nev=userData[0].fullname
        });
    }
  }
}
