import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';


@Component({
  selector: 'app-digiatalpiano',
  templateUrl: './digiatalpiano.component.html',
  styleUrls: ['./digiatalpiano.component.css']
})
export class DigiatalpianoComponent {
  searchText = ''
  constructor(private hero:HeroService,private router:Router) { }
  digidata:any;
  piano:any;
  ngOnInit():void {
    this.digidata=this.hero.getdigiData()
    console.log(this.digidata);

}
goto(name:any,id:any) {
  localStorage.setItem('name',name);
  localStorage.setItem('id', id);
  
  
  this.router.navigate(['/singleinstrument']);
}
}
