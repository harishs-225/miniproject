import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent {
guitardata: any;
searchText = ''
constructor(private hero:HeroService,private router:Router) { }
  guitar:any;
  ngOnInit():void {
    this.guitardata=this.hero.getguitarData()
    console.log(this.guitardata);

    this.hero.search.subscribe(sData => {
      // console.log(sData);
      this.searchText = sData
    })

  }
  goto(name:any,id:any) {
    localStorage.setItem('name',name);
    localStorage.setItem('id', id);
    
    
    this.router.navigate(['singleinstrument']);
  }
  
  
  
}


