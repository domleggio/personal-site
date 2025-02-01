import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from "../app/components/post/post.component";
import { MainContainerComponent } from './components/main-container/main-container.component';

const routes: Routes = [
  {path: '', component: MainContainerComponent},
  {path: 'blog', component: PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
