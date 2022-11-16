import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover: string = 'https://source.unsplash.com/random/?news'

  @Input()
  contentTitle: string = 'Título da Notícia'

  @Input()
  contentDescription: string = 'Content Description'

  constructor() { }

  ngOnInit(): void {
  }

}
