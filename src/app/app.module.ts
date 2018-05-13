import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// user created services
import { AppComponent } from './app.component';
import { MoviesService } from './services/movies.service';

// angular material and animtions
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { ContainerComponent } from './components/container/container.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [HttpClientModule, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
