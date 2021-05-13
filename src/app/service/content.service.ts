import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  url: any;
  constructor(private http: HttpClient) {}
  addUpdateContent = (pageContent) => {
    this.url =
      'https://angular-notepad-application-default-rtdb.asia-southeast1.firebasedatabase.app/notepadContentData.json';
    // const headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*',
    //   'Content-Type': 'application/json'
    // });
    return this.http.post(this.url, pageContent);
  }
  getContent = () => {
    this.url = 'https://angular-notepad-application-default-rtdb.asia-southeast1.firebasedatabase.app/notepadContentData.json';
    return this.http.get(this.url);
  }
  getContentById = (id) => {
    this.url = 'https://angular-notepad-application-default-rtdb.asia-southeast1.firebasedatabase.app/notepadContentData/' + id + '.json';
    return this.http.get(this.url);
  }
}
