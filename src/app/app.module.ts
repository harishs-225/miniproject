import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NavbarComponent } from './utils/navbar/navbar/navbar.component';
import { MusicalinstrumentComponent } from './pages/musicalinstrument/musicalinstrument.component';
import { LoginComponent } from './pages/login/login/login.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { ContactUsComponent } from './pages/Contact Us/contact-us/contact-us.component';
import { SingleinstrumentComponent } from './pages/singleinstrument/singleinstrument.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DrumsComponent } from './pages/drums/drums.component';
import { KeyboardComponent } from './pages/keyboard/keyboard.component';
// import { DigiatalpianoComponent } from './pages/digiatalpiano/digiatalpiano.component';
import { GuitarComponent } from './pages/guitar/guitar.component';
import { DigitalpianoComponent } from './pages/digitalpiano/digitalpiano.component';
import { SafePipe } from './safe.pipe';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicalinstrumentComponent,
    SignupComponent,
    LoginComponent,
    ContactUsComponent,
    SingleinstrumentComponent,
    NavbarComponent,
    FooterComponent,
    DrumsComponent,
    KeyboardComponent,
    // DigiatalpianoComponent,
    GuitarComponent,
    DigitalpianoComponent,
    SafePipe,
    DashboardComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig())
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
