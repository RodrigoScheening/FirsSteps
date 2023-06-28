import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Login(form: NgForm) {
    // Lógica de inicio de sesión aquí. Por ejemplo:
    const values = form.value;
    const email = values.email;
    const password = values.password;

    console.log(`Email: ${email}, Password: ${password}`);
  }
}
