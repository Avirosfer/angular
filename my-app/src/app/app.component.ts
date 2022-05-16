import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Rock Okajima";
  edad: number = 80;
  aprendiz = new Aprendiz (800, "Catherine Bowler");
  btnDisabled = true;

  cambiarEstadoBoton():void{
    this.btnDisabled = false;
  }

  aumentarEdad():void{
    this.edad++;
  }

  onScroll(event: Event){
    const elemento = event.target as HTMLElement;
    console.log(elemento.scrollTop);
  }
}

class Aprendiz{
  private id: number;
  private name: string;

  constructor (id: number, name:string){
    this.id = id;
    this.name = name;
  }
  getId():number {return this.id;}
  getNombre():string {return this.name;}
}
