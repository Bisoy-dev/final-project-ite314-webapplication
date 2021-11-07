import { Component, OnInit } from '@angular/core';
import { ISongModel } from 'models/songmodel';
import { AudioService } from 'src/app/services/audio.service';
import { BeatvibesService } from 'src/app/services/beatvibes.service';

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.css']
})
export class AllSongsComponent implements OnInit {

  songs : ISongModel[] = [] 
  song : ISongModel
  isPlay : boolean;
  songId : number = 0 
  currentPlay : number = 0
  textSearch : string = "" 
  selected : string = "";
  constructor(private beatvibesService : BeatvibesService, private audioService : AudioService) { }

  ngOnInit(): void {
    this.loadSongs()
  }  
  loadSongs(){
    this.beatvibesService.getAllSong()
    .subscribe((data)=>{
      this.songs = data
    })
  }
  play(song: ISongModel){ 
    this.songId = song.id; 
    
    if(this.songId === this.currentPlay){
      this.isPlay = !this.isPlay;
      if(!this.isPlay){
        this.audioService.stop(song.trackFile)
      }else{
        this.audioService.play(song.trackFile);
      }
    }else{
      this.isPlay = true
      this.audioService.play(song.trackFile)
    }
    this.currentPlay = song.id
  } 

  search(){ 
    if(this.textSearch == ""){
      this.loadSongs()
    }else{
      this.songs = this.songs.filter((s)=>{
        return s.artist.toLocaleLowerCase().match(this.textSearch.toLocaleLowerCase()) || s.album.toLocaleLowerCase().match(this.textSearch.toLocaleLowerCase()) || s.genre.toLocaleLowerCase().match(this.textSearch.toLocaleLowerCase()) || s.songTitle.toLocaleLowerCase().match(this.textSearch.toLocaleLowerCase())
      })
    }
  } 
  detail(song : ISongModel){
    this.selected = "detail"
    this.song = song
  }
  detailBack(){
    this.selected = ''
  }

}
