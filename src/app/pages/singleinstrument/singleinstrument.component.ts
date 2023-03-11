import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';



@Component({
  selector: 'app-singleinstrument',
  templateUrl: './singleinstrument.component.html',
  styleUrls: ['./singleinstrument.component.css']
})
export class SingleinstrumentComponent {
  single: any
  s: any
  vdoUrl:any
  constructor(private hero:HeroService,private router:Router){}
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
  if(name==='musicali'){
    this.single=this.hero.getmusicalData();
  }
  this.vdoUrl = "https://www.youtube.com/embed/"
}

gotoHere(name:any,id:any) {
  // localStorage.setItem('name',name);
  // localStorage.setItem('id', id);
  
  
  this.router.navigate(['payment']);
}
}