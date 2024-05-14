import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";
import {WatchData} from "../models/watch-data";

@Component({
  selector: 'app-main-page-watch',
  templateUrl: './main-page-watch.component.html',
  styleUrl: './main-page-watch.component.css'
})
export class MainPageWatchComponent {
  wname1:any;
  wname2:any;
  wprice1:any;
  wprice2:any;


  constructor(private authService: AuthService, private router : Router, private data: DataService) {
  }
  async logout():Promise<void> {
    try {
      await this.authService.logout();
      await this.router.navigate(['']);
    } catch (error) {
      console.error('Valami hiba történt a kijelentkezés során', error);
    }
  }
  ngOnInit(): void {
    const watch1: WatchData= { id:'2', name:'Ezüst karóra', price:'50 Békabogár'}
    this.data.createNecklace(watch1).then(() => {
      console.log("Watch added");
    }).catch((error) => {
      console.error(error);
    });

    const watch2: WatchData= { id:'3', name:'Ezüst kocka karóra', price:'60 Békabogár'}
    this.data.createNecklace(watch2).then(() => {
      console.log("Watch added");
    }).catch((error) => {
      console.error(error);
    });

    this.data.getWatchById('2')
      .subscribe(WatchData => {
        this.wname1=WatchData[0].name
        this.wprice1=WatchData[0].price
      });

    this.data.getWatchById('3')
      .subscribe(WatchData => {
        this.wname2=WatchData[0].name
        this.wprice2=WatchData[0].price
      });
  }
}
