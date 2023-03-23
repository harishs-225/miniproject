import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  data: any;

  name: string = '';
  cardnumber: string = '';
  expiration: string = '';
  cvv: string = '';

single: any
  s: any
  vdoUrl:any
  constructor(private hero:HeroService){}
  ngOnInit():void{
    let name = localStorage.getItem('name');
    let id = localStorage.getItem('id');
    if (name==='keyboard'){
     this.single=this.hero.getKeyboardData();
     this.s= this.single.filter((e: { id: string | null; }) => e.id === id);
    }
    
    if(name==='drums'){
      this.single=this.hero.getdrumData();
      this.s= this.single.filter((e: { id: string | null; })=> e.id === id);

   
}
   if(name==='piano'){
    this.single=this.hero.getdigiData();
    this.s=this.single.filter((e: { id: string | null; })=> e.id === id);
   }
   if(name==='guitar'){
    this.single=this.hero.getguitarData();
    this.s= this.single.filter((e:{id: string | null})=> e.id === id);
  }
  if(name==='musicaldata'){
    this.single=this.hero.getmusicalData();
  }
  // this.vdoUrl = "https://www.youtube.com/embed/"
}
payNow() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Payment Done Successfully...',
    background: '#212529',
    showConfirmButton: false,
    timer: 2000,
  });
}

}
