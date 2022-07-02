import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-fundamentos-angular';
  person = {
    nombre: '',
    age: ''
  };

  form = {
    name: '',
    mail: '',
    pass: ''
  }

  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  names = ['Nicolas', 'Sergio', 'Andrea'];

  submitLogin() {
    alert('Has entrado');
  }
}
