import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {

  searchText = ''

  keybddata: any;

      
  constructor(private hero:HeroService,private router:Router) { }
  keybd:any;
  ngOnInit():void {
    this.keybddata=this.hero.getKeyboardData()
    console.log(this.keybddata);
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

  
  




