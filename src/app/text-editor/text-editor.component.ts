import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

import { ContentService } from '../service/content.service';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.sass'],
})
export class TextEditorComponent {
  name = 'ng2-ckeditor';
  myContent: string;
  log: string;
  res: any;
  public editor = DecoupledEditor;
  contentData = {
    title: '',
    content: '',
    id: '',
  };

  constructor(private contentService: ContentService, private router: Router) {}
  onChange = ({ editor }: ChangeEvent) => {
    const data = editor.getData();
    this.contentData.content = data;
  }

  onTitleChange = (event) => {
    const data = event.target.value;
    this.contentData.title = data;
  }

  idGenerator = () => {
    const idValue = (Math.random() * 1000).toFixed(0);
    this.contentData.id = idValue;
  }

  onSubmit() {
    this.idGenerator();
    this.contentService
      .addUpdateContent(this.contentData)
      .subscribe((data: any) => {
        alert('Data saved Successfully');
        this.router.navigate(['/Post']);
      });
  }
}
