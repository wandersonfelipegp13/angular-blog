import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from 'src/app/data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  private id: string | null = '0';

  photoCover: string = 'https://source.unsplash.com/random/?news';

  contentTitle: string = 'Título da Notícia';

  date: string = 'Sem data de postagem';

  contentDescription: string = 'Content Description';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });

    if (this.id && this.id !== '0') {
      this.setValuesToComponent(this.id);
    }
  }

  setValuesToComponent(id: string) {
    const result = Data.filter((article) => article.id == id)[0];

    if (result) {
      this.contentTitle = result.title;
      this.date = result.date;
      this.photoCover = result.photo;
      this.contentDescription = result.description;
    }
  }
}
