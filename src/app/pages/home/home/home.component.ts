import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  database=[
    {
      "image":"https://pulsemusicals.com/wp-content/uploads/2014/10/bannerpic31.jpg",
        
    },
    {
      "image":"https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      "image":"https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      "image":"https://images.unsplash.com/photo-1570698824041-22cbab696486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }

  ]
  hero: any;
  
  constructor(private service: HeroService){}  
   musicaldata:any;
   music:any;
   
   ngOnInit():void{
    this.musicaldata=this.service.getmusicalData()
    console.log(this.musicaldata);
    
}
}
