import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  constructor() { }

  @Input() valor: string="";
  //valor: number=1;

  ngOnInit(): void {
    //this.valor= Math.trunc(Math.random() * 6)+1;
  }

}
