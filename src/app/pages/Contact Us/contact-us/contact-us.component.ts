import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  email:string='';
  comments:string='';
  constructor(private Auth:AuthService,public hero:AuthService){}
    submit()
    {
      this.Auth.contactus(this.email,this.comments)
    }

}
