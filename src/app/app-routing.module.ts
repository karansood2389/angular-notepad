import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPostComponent } from './details-post/details-post.component';
import { PageContentComponent } from './page-content/page-content.component';
import { TextEditorComponent } from './text-editor/text-editor.component';

const routes: Routes = [
  { path: '', component: TextEditorComponent },
  { path: 'Post', component: PageContentComponent },
  { path: 'Details', component: DetailsPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
