import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/Contact Us/contact-us/contact-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DigiatalpianoComponent } from './pages/digiatalpiano/digiatalpiano.component';
import { DrumsComponent } from './pages/drums/drums.component';
import { ForgotpswdComponent } from './pages/forgotpswd/forgotpswd.component';
import { GuitarComponent } from './pages/guitar/guitar.component';
import { HomeComponent } from './pages/home/home/home.component';
import { KeyboardComponent } from './pages/keyboard/keyboard.component';
import { LoginComponent } from './pages/login/login/login.component';
import { MusicalinstrumentComponent} from './pages/musicalinstrument/musicalinstrument.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { SingleinstrumentComponent } from './pages/singleinstrument/singleinstrument.component';
import { VerifyemailComponent } from './pages/verifyemail/verifyemail.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'musicalinstrument',component:MusicalinstrumentComponent},
  {path:'singleinstrument',component:SingleinstrumentComponent},
  {path:'keyboard',component:KeyboardComponent},
  {path:'drums',component:DrumsComponent},
  {path:'digitalpiano',component:DigiatalpianoComponent},
  {path:'guitar',component:GuitarComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'payment',component:PaymentComponent},
  {path:'forgotpassword',component:ForgotpswdComponent},
  {path:'verifyemail',component:VerifyemailComponent}
  



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
