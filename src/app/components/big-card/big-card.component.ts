import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string = 'https://source.unsplash.com/random/?news';

  @Input()
  date: string = 'Sem data de postagem'

  @Input()
  cardTitle: string = 'Big News Title';

  @Input()
  cardDescription = 'Big News Description'

  constructor() {}

  ngOnInit(): void {
    this.cardTitle = this.cardTitle.toLocaleUpperCase()
  }

}
