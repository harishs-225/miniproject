import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgotpswd',
  templateUrl: './forgotpswd.component.html',
  styleUrls: ['./forgotpswd.component.css']
})
export class ForgotpswdComponent {
 email:string='';
constructor(private auth: AuthService,private router: Router) {}
verifyEmail(){
  this.auth.forgotPassword(this.email);
    this.email = '';
    this.router.navigate(['verifyemail']);
}
}