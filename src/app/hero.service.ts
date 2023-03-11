import { Injectable } from '@angular/core';
import {  digidata, drumdata, guitardata, keybddata, musicaldata } from 'src/assets/data/data';
import { singledata } from 'src/assets/data/single';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getmusicalData1(): any {
    throw new Error('Method not implemented.');
  }

  search = new BehaviorSubject<any>("")

  drumData: any;
  getData(): any {
    throw new Error('Method not implemented.');
  }
  details: any;
  music: any;
  keybd: any;
   getmusicalData() {
    return musicaldata;
   }

   getKeyboardData() {
    return keybddata;
   }
   getdrumData(){
    return drumdata;
   }
   getdigiData(){
       return digidata;   
  }
  getguitarData(){
    return guitardata;
  }

  getKeyData() {
    return singledata;
  }
  
 


  
}   
