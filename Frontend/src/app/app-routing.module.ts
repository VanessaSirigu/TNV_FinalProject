import { EditCommentComponent } from './routes/comments/edit-comment/edit-comment.component';
import { AddCommentComponent } from './routes/comments/add-comment/add-comment.component';
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
import { UsersManagerPageComponent } from './routes/users/users-manager-page/users-manager-page.component';
import { AddUserComponent } from './routes/users/add-user/add-user.component';
import { UserDetailsComponent } from './routes/users/user-details/user-details.component';
import { EditUserComponent } from './routes/users/edit-user/edit-user.component';
import { TvSeriesApiComponent } from './routes/tv-series-api/dashboard-series/tv-series-api.component';
import { MovieRatingComponent } from './components/movie-rating/movie-rating.component';
import { AddMovieRatingComponent } from './routes/add-movie-rating/add-movie-rating.component';
import { RatingDetailsComponent } from './routes/rating-details/rating-details.component';
import { DetailsMovieApiComponent } from './routes/details-movie-api/details-movie-api.component';
import { AddRatingApiComponent } from './routes/add-rating-api/add-rating-api.component';
import { MyDashboardComponent } from './routes/my-dashboard/my-dashboard.component';
import { CommentsManagerPageComponent } from './routes/comments/comments-manager-page/comments-manager-page.component';
import { CommentDetailsComponent } from './routes/comments/comment-details/comment-details.component';
import { HomeComponent } from './routes/home/home.component';
import { PopularPageComponent } from './routes/popular-page/popular-page.component';
import { RegistrationPageComponent } from './routes/registration-page/registration-page.component';
import { DetailsTvServiesApiComponent } from './routes/details-tv-servies-api/details-tv-servies-api.component';
import { CommunityRatingsComponent } from './routes/community-ratings/community-ratings.component';
import { CommunityCommentsComponent } from './routes/community-comments/community-comments.component';
import { EditCommentApiComponent } from './routes/comments/edit-comment-api/edit-comment-api.component';

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
  { path: "detailMovieApi/:id",component:DetailsMovieApiComponent},
  { path: "addRatingApi/:id",component:AddRatingApiComponent},
  { path: "tvSeries", component : TvSeriesApiComponent},
  { path: "myBoard", component : MyDashboardComponent},
  { path: "commentsManager", component : CommentsManagerPageComponent},
  { path: "commentDetails/:id", component : CommentDetailsComponent},
  { path: "addComment", component : AddCommentComponent},
  { path: "editComment/:id", component : EditCommentComponent},
  { path: "editCommentApi/:id", component : EditCommentApiComponent},
  { path: "home", component : HomeComponent},
  { path: "popMovies", component : PopularPageComponent},
  { path: "communityRatings", component : CommunityRatingsComponent},
  { path: "communityComments", component: CommunityCommentsComponent},
  { path: "registration", component : RegistrationPageComponent},
  { path: "detailTvSeriesApi/:id", component : DetailsTvServiesApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
