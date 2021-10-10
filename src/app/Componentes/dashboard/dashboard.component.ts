import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  nombre: string;
URLImg:string;
Textop: string;
isdisable: boolean;
  constructor() {
      this.nombre="";
    this.URLImg="";
    this.Textop="Hola esto es un ejemplo"
    this.isdisable=true;
  }

  ngOnInit(): void {
  }

  getNombre(): string {
    return this.nombre="Jose Arael Betancourt Flores";
  }

  suma(uno: number,dos: number): number{
    return uno+dos;
  }
  Habilitar(data:string):void {
   this.Textop=data;
  }
}
