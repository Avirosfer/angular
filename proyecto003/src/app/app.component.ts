import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  valor1: number;
  valor2: number;
  valor3: number;
  resultado: string="";
  contador: number=0;
  lanzador: boolean = false;

  constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
  }

  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    this.contador = this.contador+1;

    if (this.valor1==this.valor2 && this.valor1==this.valor3){
          this.resultado='Ganó';
          this.lanzador = true
    }else{
      this.resultado='Perdió';
    }

    if(this.contador >=15){
      this.lanzador=true;
    }
  }

    enabledButtom(){
      this.lanzador = false;
      this.contador = 0;
    }

}
