import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../service/content.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.sass'],
})

export class PageContentComponent implements OnInit {
  res: any;
  terms: any;
  cont: any;

  constructor(private contentservice: ContentService, private router: Router) {}

  ngOnInit() {
    this.Getcontent();
  }

  Getcontent() {
    this.contentservice.getContent().subscribe((data: any) => {
      const resData = Object.keys(data).map( ele => {
        return {
          key: ele,
          id: data[ele].id,
          title: data[ele].title,
          content: data[ele].content
        };
      });
      this.res = resData;
      console.log(this.res);
    });
  }

  getContentById(value: number) {
    const objectClicked = this.res.filter( content => content.id === value);
    const id = objectClicked[0].key;
    this.router.navigate(['/Details'], { queryParams: { id } });
  }
}
