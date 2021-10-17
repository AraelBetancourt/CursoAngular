import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() User: any;
  Nombre: string;
  Email:string;
  Genero:string;
  constructor() {
    this.Nombre="";
    this.Email="";
    this.Genero="";
  }

  ngOnInit(): void {
    this.Nombre=this.User.Nombre;
    this.Email=this.User.Email;
    this.Genero=this.User.Genero;
  }

}
