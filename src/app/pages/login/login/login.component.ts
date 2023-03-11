import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Auth } from '@angular/fire/auth';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
  }

  emailIn: string = ""
  passwordIn: string = ""

  Name: string = ""
  emailUp: string = ""
  passwordUp: string = ""
  cpasswordUp: string = ""
  user: any 

  
  constructor(private auths : AuthService,private router:Router,public auth:Auth) { }


  signup(){
    this.router.navigate(['signup']);
  }

  
  login() {
    if (this.emailIn == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your email...',
        background: "#212529"
      })
      return
    }
    if (this.passwordIn == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your password...',
        background: "#212529"
      })
      return
    }

    this.auths.login(this.emailIn, this.passwordIn)
    this.emailIn = ""
    this.passwordIn = ""
  }
}
