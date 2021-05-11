import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  url: any;
  constructor(private http: HttpClient) {}
  addUpdateContent = (pageContent) => {
    this.url = 'http://localhost:56357/Api/Contents/saveconetnt';
    return this.http.post(this.url, pageContent);
  }
  getContent = () => {
    this.url = 'http://localhost:56357/Api/Contents/Getpagdata';
    return this.http.get(this.url);
  }
  getContentById = (id) => {
    this.url = 'http://localhost:56357/Api/Contents/GetpagecontentBy?Id=' + id;
    return this.http.get(this.url);
  }
}
