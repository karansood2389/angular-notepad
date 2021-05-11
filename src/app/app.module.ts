import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CKEditorModule } from 'ng2-ckeditor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { PageContentComponent } from './page-content/page-content.component';
import { DetailsPostComponent } from './details-post/details-post.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    PageContentComponent,
    DetailsPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
