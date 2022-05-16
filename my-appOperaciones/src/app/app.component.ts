import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   num1: number = 0;
   num2: number = 0;
   resultado: number = 0;

  suma(num1: number, num2: number):void{
    let resultado = num1 + num2;
    let suma = new Operacion (num1, num2, resultado)
    this.resultado = suma.getResultado()
  }

  resta(num1: number, num2: number){
    return this.num1 - this.num2
  }

  multi(num1: number, num2: number){
    return this.num1 * this.num2
  }

  dvd(num1: number, num2: number){
    return this.num1 / this.num2
  }

}

class Operacion{
  private num1: number;
  private num2: number;
  private resultado: number;

  constructor (num1:number, num2:number, resultado:number){
    this.num1 = num1;
    this.num2 = num2;
    this.resultado = resultado,
  }
  getNum1():number {return this.num1;}
  getNum2():number {return this.num2;}
  getResultado(): number {return this.resultado}
}


