import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {UserData} from "../models/user-data";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  collectionName='Users';

  private data='';

  constructor(private asf: AngularFirestore) { }

  create(user: UserData){
    return this.asf.collection<UserData>(this.collectionName).doc(user.email).set(user);
  }
  getAll(){
    return this.asf.collection<UserData>(this.collectionName).valueChanges();
  }
  update(){

  }
  delete(){

  }
  getUserByEmail(email: string){
    return this.asf.collection<UserData>(this.collectionName, ref => ref.where('email', '==', email)).valueChanges();
  }
  setData(data: string) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
