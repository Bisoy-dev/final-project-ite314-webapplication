import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISongModel } from 'models/songmodel';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  @Input() song : ISongModel; 
  @Input() currentPlay : number
  @Input() isPlay : boolean; 
  artistName : string = ""
  @Output() playToggleEvent : EventEmitter<ISongModel> = new EventEmitter();
  @Output() detailEvent : EventEmitter<ISongModel> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.artistName = this.song.artist.length >= 25 ? this.song.artist.substr(0,16) + '...' : this.song.artist
  }
  play(song : ISongModel){
    this.playToggleEvent.emit(song)
  }
  detail(song : ISongModel){
    this.detailEvent.emit(song)
  }
}
