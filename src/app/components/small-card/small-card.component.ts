import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCard: string = 'https://source.unsplash.com/random/?news'

  @Input()
  titleCard: string = 'Card Description'

  constructor() { }

  ngOnInit(): void {
  }

}
