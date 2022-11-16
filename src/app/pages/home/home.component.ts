import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bigContent = Data[0];
  news = Data.slice(1);

  constructor() { }

  ngOnInit(): void {
  }

}
