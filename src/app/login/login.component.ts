import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login(f: any) {
    console.log(f)
    console.log(f.controls.username.errors)
  }
}
