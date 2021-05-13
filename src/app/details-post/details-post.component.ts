import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../service/content.service';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.sass'],
})
export class DetailsPostComponent implements OnInit {
  res: any;
  title: any;
  content: any;
  constructor(
    private route: ActivatedRoute,
    private contentservice: ContentService
  ) {}
  ngOnInit() {
    const indexValue = 'id';
    const id = this.route.snapshot.queryParams[indexValue];
    this.getContentById(id);
  }
  getContentById(id: string) {
    this.contentservice.getContentById(id).subscribe((data: any) => {
      this.res = data;
      this.title = this.res.title;
      this.content = this.res.content;
    });
  }
}
