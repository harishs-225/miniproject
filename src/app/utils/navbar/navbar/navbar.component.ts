import { Component,OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { AuthService } from 'src/app/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchKey= ''
  
  isLoggedIn$:Observable<boolean> | undefined;
  constructor(private api:HeroService,private auth:AuthService) {}
  ngOnInit(){
    this.isLoggedIn$=this.auth.isLoggedIn;
  }

  logout(){
    this.auth.logout();
  }
  
  search(e: any) {
    this.searchKey = (e.target as HTMLInputElement).value
    // console.log(this.searchKey);
    this.api.search.next(this.searchKey)
    
  }

}
