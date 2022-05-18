import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ops = new Operacion();

  leerNum1(event:Event){
    const elemento = event.target as HTMLInputElement;
    this.ops.setNum1(parseInt(elemento.value));
  }

  leerNum2(event:Event){
    const elemento = event.target as HTMLInputElement;
    this.ops.setNum2(parseInt(elemento.value));
  }

}

class Operacion{

  private num1: number = 0;
  private num2: number = 0;
  private resultado: number = 0;

  getNum1() {return this.num1;}
  getNum(){return this.num2;}
  getResultado() {return this.resultado;}

  setNum1 (num1: number){this.num1 = num1};
  setNum2 (num2: number){this.num2 = num2};
  setResultado (resultado: number){this.resultado = resultado};

  suma():void{
    this.resultado = this.num1 + this.num2;
  }

  resta():void{
    this.resultado = this.num1 - this.num2;
  }

  multi():void{
    this.resultado = this.num1 * this.num2;
  }

  dvd():void{
    this.resultado = this.num1 / this.num2;
  }
}


