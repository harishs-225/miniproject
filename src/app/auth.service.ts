import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification
} from '@angular/fire/auth';

import { doc, Firestore, setDoc, getDoc, addDoc, collection} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private loggedIn=new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  user: any;
  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router
  ) {}

  signup(email: string, password: string, name: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then(
      (res) => {
        const uid = res.user.uid;
        const email = res.user.email;
        const user = {
          email: email,
          name: name,
        };
        const docRef = doc(this.firestore, 'users', uid);
        setDoc(docRef, user)
          .then(() => {
            console.log('Data added successfully');
          })
          .catch((err) => {
            console.log(err);
          });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Signing up successfully...',
          background: '#212529',
          showConfirmButton: false,
          timer: 2000,
        });
        this.router.navigate(['login']);
      },
      (err) => {
        if (err.code === 'auth/email-already-in-use') {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Already signed up with this email address...',
            background: '#212529',
            showConfirmButton: false,
            timer: 2000,
          });
        }
        this.router.navigate(['signup']);
      }
    );
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(
      () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logged In successfully...',
          background: '#212529',
          showConfirmButton: false,
          timer: 2000,
        });
        // localStorage.setItem('token','true');
        this.loggedIn.next(true);
        this.router.navigate(['keyboard']);
      },
      (err) => {
        if (err.code === 'auth/wrong-password') {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Wrong Password Please Try Again',
            background: '#212529',
            showConfirmButton: false,
            timer: 2000,
          });
        }

        this.router.navigate(['login']);
      }
    );
  }

  logout() {
    signOut(this.auth).then(
      () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logged Out successfully...',
          background: '#212529',
          showConfirmButton: false,
          timer: 2000,
        });
        // localStorage.removeItem('token');
        this.loggedIn.next(false);
        this.router.navigate(['login']);
      },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Something went wrong ' + err,
          background: '#212529',
          showConfirmButton: false,
          timer: 2000,
        });
         this.router.navigate(['keyboard']);
      }
    );
  }

  forgotPassword(email: string) {
          sendPasswordResetEmail(this.auth, email).then(
            () => {
              this.router.navigate(['verifyemail']);
            },
            (err) => {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Something went wrong ' + err,
                background: '#212529',
                showConfirmButton: false,
                timer: 2000,
              });
              this.router.navigate(['forgotpassword']);
            }
          );
        }

        sendEmailForVerification(user: any) {
          sendEmailVerification(user).then(
            () => {
              this.router.navigate(['verifyemail']);
            },
            (err) => {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Something went wrong ' + err,
                background: '#212529',
                showConfirmButton: false,
                timer: 2000,
              });
            }
          );
        }

        contactus(email:string, comments:string){
          let data={
            email:email,
            comments:comments
          }
          const docRef = collection(this.firestore, 'contactus')
          addDoc(docRef, data)
          .then(() => {
            console.log('Data added successfully');
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Message send successfully...',
              background: '#212529',
              showConfirmButton: false,
              timer: 2000,
            });
          })
          .catch((err) => {
            
            console.log(err);
          });

        }
       
        
   
}