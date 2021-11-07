import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AllSongsComponent } from './components/all-songs/all-songs.component';
import { SongComponent } from './components/song/song.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AllSongsComponent,
    SongComponent,
    SongDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
