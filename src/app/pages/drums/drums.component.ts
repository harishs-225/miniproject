import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-drums',
  templateUrl: './drums.component.html',
  styleUrls: ['./drums.component.css']
})
export class DrumsComponent {
  searchText = ''
  constructor(private hero:HeroService,private router:Router) { }
  drumdata:any;
 
  ngOnInit():void {
    this.drumdata=this.hero.getdrumData()
    console.log(this.drumdata);

}
goto(name:any,id:any) {
  localStorage.setItem('name',name);
  localStorage.setItem('id', id);
  
  
  this.router.navigate(['singleinstrument']);
}
}
