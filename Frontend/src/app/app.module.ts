import { UsersManagerPageComponent } from './routes/users/users-manager-page/users-manager-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { DataService } from './services/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddComponent } from './routes/add/add.component';
import { DetailsComponent } from './routes/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './routes/edit/edit.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { FilterByGenreComponent } from './routes/filter-by-genre/filter-by-genre.component';
import { GenrePipePipe } from './pipes/genrePipe/genre-pipe.pipe';
import { WelcomePageComponent } from './routes/welcome-page/welcome-page.component';
import { SortByDateComponent } from './routes/sort-by-date/sort-by-date.component';
import { MoviesApiComponent } from './routes/movies-api/movies-api.component';
import { AddUserComponent } from './routes/users/add-user/add-user.component';
import { UserDetailsComponent } from './routes/users/user-details/user-details.component';
import { EditUserComponent } from './routes/users/edit-user/edit-user.component';
import { TvSeriesApiComponent } from './routes/tv-series-api/dashboard-series/tv-series-api.component';
import { AuthHeaderInterceptor } from './interceptor/auth-header.interceptor';
import { MovieRatingComponent } from './components/movie-rating/movie-rating.component';
import { RatingPipePipe } from './pipes/rating-pipe.pipe';
import { IdUserPipe } from './pipes/ratingPipe/id-user.pipe';
import { AddMovieRatingComponent } from './routes/add-movie-rating/add-movie-rating.component';
import { RatingDetailsComponent } from './routes/rating-details/rating-details.component';
import { EditMovieRatingComponent } from './routes/edit-movie-rating/edit-movie-rating.component';
import { DettagliComponent } from './routes/dettagli/dettagli.component';
import { DetailsMovieApiComponent } from './routes/details-movie-api/details-movie-api.component';
import { AddRatingApiComponent } from './routes/add-rating-api/add-rating-api.component';
import { AddCommentComponent } from './routes/comments/add-comment/add-comment.component';
import { EditCommentComponent } from './routes/comments/edit-comment/edit-comment.component';
import { CommentDetailsComponent } from './routes/comments/comment-details/comment-details.component';
import { CommentsManagerPageComponent } from './routes/comments/comments-manager-page/comments-manager-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddComponent,
    DetailsComponent,
    EditComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoginPageComponent,
    LoadingPageComponent,
    FilterByGenreComponent,
    GenrePipePipe,
    WelcomePageComponent,
    SortByDateComponent,
    MoviesApiComponent,
    UsersManagerPageComponent,
    AddUserComponent,
    UserDetailsComponent,
    EditUserComponent,
    TvSeriesApiComponent,
    MovieRatingComponent,
    RatingPipePipe,
    IdUserPipe,
    AddMovieRatingComponent,
    RatingDetailsComponent,
    EditMovieRatingComponent,
    DettagliComponent,
    DetailsMovieApiComponent,
    AddRatingApiComponent,
    AddCommentComponent,
    EditCommentComponent,
    CommentDetailsComponent,
    CommentsManagerPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService,
  {provide : HTTP_INTERCEPTORS, useClass : AuthHeaderInterceptor, multi : true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
