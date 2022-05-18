import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent{
   title: 'app-Calculadora';
   calc = new Calculadora();
   resu = 0;
}

actualizaResu(){
  this.resu = this.calc.getResultado();
}
