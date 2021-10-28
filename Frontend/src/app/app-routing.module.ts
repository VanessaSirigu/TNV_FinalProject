import { EditCommentComponent } from './routes/comments/edit-comment/edit-comment.component';
import { AddCommentComponent } from './routes/comments/add-comment/add-comment.component';
import { NgModule, Component } from '@angular/core';
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
import { UsersManagerPageComponent } from './routes/users/users-manager-page/users-manager-page.component';
import { AddUserComponent } from './routes/users/add-user/add-user.component';
import { UserDetailsComponent } from './routes/users/user-details/user-details.component';
import { EditUserComponent } from './routes/users/edit-user/edit-user.component';
import { TvSeriesApiComponent } from './routes/tv-series-api/dashboard-series/tv-series-api.component';

import { MovieRatingComponent } from './components/movie-rating/movie-rating.component';
import { AddMovieRatingComponent } from './routes/add-movie-rating/add-movie-rating.component';
import { RatingDetailsComponent } from './routes/rating-details/rating-details.component';
import { EditMovieRatingComponent } from './routes/edit-movie-rating/edit-movie-rating.component';
import { DettagliComponent } from './routes/dettagli/dettagli.component';
import { DetailsMovieApiComponent } from './routes/details-movie-api/details-movie-api.component';
import { AddRatingApiComponent } from './routes/add-rating-api/add-rating-api.component';
import { MyDashboardComponent } from './routes/my-dashboard/my-dashboard.component';
import { CommentsManagerPageComponent } from './routes/comments/comments-manager-page/comments-manager-page.component';
import { CommentDetailsComponent } from './routes/comments/comment-details/comment-details.component';
import { HomeComponent } from './routes/home/home.component';
import { PopularPageComponent } from './routes/popular-page/popular-page.component';
import { CommunityComponent } from './routes/community/community.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RegistrationService } from './services/registration.service';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationPageComponent } from './routes/registration-page/registration-page.component';

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
  { path: "usersManager", component : UsersManagerPageComponent},
  { path: "addUser", component : AddUserComponent},
  { path: "userDetails/:id", component : UserDetailsComponent},
  { path: "userDetails/edit/:id", component : EditUserComponent},
  { path: "tvSeries", component : TvSeriesApiComponent},
  { path: "movieRating",component: MovieRatingComponent},
  { path: "addMovieRating",component:AddMovieRatingComponent},
  { path: "ratingDetails/:id",component:RatingDetailsComponent},
  { path: "editMovieRating/:id",component:EditMovieRatingComponent},
  { path: "dettagli/:id", component:DettagliComponent},
  { path: "detailMovieApi/:id",component:DetailsMovieApiComponent},
  { path: "addRatingApi/:id",component:AddRatingApiComponent},
  { path: "tvSeries", component : TvSeriesApiComponent},
  { path: "myBoard", component : MyDashboardComponent},
  { path: "commentsManager", component : CommentsManagerPageComponent},
  { path: "commentDetails/:id", component : CommentDetailsComponent},
  { path: "addComment", component : AddCommentComponent},
  { path: "editComment/:id", component : EditCommentComponent},
  { path: "home", component : HomeComponent},
  { path: "popMovies", component : PopularPageComponent},
  { path: "community", component : CommunityComponent},
  { path: "registration", component : RegistrationPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
