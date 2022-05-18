import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  condicion = true
  Nombre = "Rokuro Okajima";
  edad = 21;
  img = "https://source.unplash.com/random";
  aprendiz = new Aprendiz(100, "Revy Two Hands");
  btnDisabled = true;

  myArray: string[]= [
    "George",
    "Lewis",
  ]
}
