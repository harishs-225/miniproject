import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-musicalinstrument',
  templateUrl: './musicalinstrument.component.html',
  styleUrls: ['./musicalinstrument.component.css']
})
export class MusicalinstrumentComponent {

  searchText = ''

  constructor(private hero:HeroService,private router:Router) { }
  musicaldata: any;
  musicaldata1:any;
  ngOnInit():void{
   this.musicaldata=this.hero.getmusicalData()
   


  }
  goto(name:any,id:any) {
    localStorage.setItem('name',name);
    localStorage.setItem('id', id);
    
    
    this.router.navigate(['singleinstrument']);
  }
  
  

}

