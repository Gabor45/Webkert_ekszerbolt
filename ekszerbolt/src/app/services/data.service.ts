import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {UserData} from "../models/user-data";
import {NecklaceData} from "../models/necklace-data";
import {WatchData} from "../models/watch-data";

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
  update(user: UserData){
    return this.asf.collection<UserData>(this.collectionName).doc(user.email).update(user);
  }
  delete(user: UserData){
    return this.asf.collection<UserData>(this.collectionName).doc(user.email).delete();
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
  //Nyakláncok
  createNecklace(necklace: NecklaceData){
    return this.asf.collection<NecklaceData>("Necklaces").doc(necklace.id).set(necklace);
  }
  updateNecklace(necklace:NecklaceData){
    return this.asf.collection<NecklaceData>("Necklaces").doc(necklace.id).update(necklace);
  }
  deleteNecklace(necklace: NecklaceData){
    return this.asf.collection<NecklaceData>("Necklaces").doc(necklace.id).delete();
  }
  getNecklaceById(id: string){
    return this.asf.collection<NecklaceData>("Necklaces", ref => ref.where('id', '==', id).limit(1)).valueChanges();
  }
  //Karórák
  createWatch(watch: WatchData){
    return this.asf.collection<WatchData>("Watches").doc(watch.id).set(watch);
  }
  updateWatch(watch: WatchData){
    return this.asf.collection<WatchData>("Watches").doc(watch.id).update(watch);
  }
  deleteWatch(watch: WatchData){
    return this.asf.collection<WatchData>("Watches").doc(watch.id).delete();
  }
  getWatchById(id: string){
    return this.asf.collection<WatchData>("Watches", ref => ref.where('id', '==', id).limit(1)).valueChanges();
  }
}
