import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { NotFoutComponent } from './components/not-fout/not-fout.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'post', component: PostListComponent},
  {path: 'post/:id', component: PostListComponent},
  {path: '**', component: NotFoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
