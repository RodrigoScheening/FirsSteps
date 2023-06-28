import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  register(form: NgForm) {
    // Aquí tu lógica para manejar la registración. Por ejemplo:
    const values = form.value;
    const email = values.email;
    const password = values.password;

    console.log(`Email: ${email}, Password: ${password}`);
  } 
}
