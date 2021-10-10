import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Output() TituloCard = new EventEmitter<string>()
  constructor() {


  }

  ngOnInit(): void {
  }
  ChangeName(valor: string): void {
    this.TituloCard.emit(valor);
  }
}
