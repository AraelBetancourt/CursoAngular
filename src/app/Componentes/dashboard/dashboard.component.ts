import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listausuarios: any[];
 
  constructor() {
     this.listausuarios=[
       {Nombre:"JOse",Email:"1",Genero:"M"},
       {Nombre:"arael",Email:"2",Genero:"F"},
       {Nombre:"Betancort",Email:"3",Genero:"F"},
       {Nombre:"flores",Email:"4",Genero:"A"}

     ]
  }

  ngOnInit(): void {
  }


}
