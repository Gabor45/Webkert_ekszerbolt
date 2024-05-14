import {Component, Input, SimpleChanges} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";
import {NecklaceData} from "../models/necklace-data";

@Component({
  selector: 'app-main-page-necklace',
  templateUrl: './main-page-necklace.component.html',
  styleUrl: './main-page-necklace.component.css'
})
export class MainPageNecklaceComponent {
  name1:any;
  name2:any;
  price1:any;
  price2:any;


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
    const necklace1: NecklaceData= { id:'2', name:'Arany nyaklánc', price:'15 Békabogár'}
    this.data.createNecklace(necklace1).then(() => {
      console.log("Necklace added");
    }).catch((error) => {
      console.error(error);
    });
    const necklace2: NecklaceData= { id:'3', name:'Ezüst nyaklánc', price:'10 Békabogár'}
    this.data.createNecklace(necklace2).then(() => {
      console.log("Necklace added");
    }).catch((error) => {
      console.error(error);
    });
    this.data.getNecklaceById('2')
      .subscribe(NecklaceData => {
        this.name1=NecklaceData[0].name
        this.price1=NecklaceData[0].price
      });
    this.data.getNecklaceById('3')
      .subscribe(NecklaceData => {
        this.name2=NecklaceData[0].name
        this.price2=NecklaceData[0].price
      });
  }
}
