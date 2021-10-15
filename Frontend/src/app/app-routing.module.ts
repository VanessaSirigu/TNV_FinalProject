import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './routes/dashboard/dashboard.component'
import { AddComponent } from './routes/add/add.component';
import { DetailsComponent } from './routes/details/details.component';
import { EditComponent } from './routes/edit/edit.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { FilterByGenreComponent } from './routes/filter-by-genre/filter-by-genre.component';
import { WelcomePageComponent } from './routes/welcome-page/welcome-page.component';
import { SortByDateComponent } from './routes/sort-by-date/sort-by-date.component';
import { MoviesApiComponent } from './routes/movies-api/movies-api.component';
import { CommentDetailsComponent } from './routes/comments/comment-details/comment-details.component';
import { EditCommentComponent } from './routes/comments/edit-comment/edit-comment.component';
import { AddCommentComponent } from './routes/comments/add-comment/add-comment.component';
import { CommentsManagerPageComponent } from './routes/comments/comments-manager-page/comments-manager-page.component';


const routes: Routes = [
  { path: "", redirectTo : '/welcome', pathMatch: 'full' },
  { path: "welcome", component: WelcomePageComponent},
  { path: "dashboard", component : DashboardComponent },
  { path: "add", component : AddComponent },
  { path: "details/:id", component : DetailsComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "login", component: LoginPageComponent},
  { path: "filterByGenre", component: FilterByGenreComponent},
  { path: "sortByDate", component:SortByDateComponent},
  { path: "moviesApi", component: MoviesApiComponent},
  { path: "commentsManager", component: CommentsManagerPageComponent },
  { path: "addComment", component: AddCommentComponent },
  { path: "commentDetails/:id", component: CommentDetailsComponent },
  { path: "commentDetails/edit/:id", component: EditCommentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
