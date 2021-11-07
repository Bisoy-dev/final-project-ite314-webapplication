import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISongModel } from 'models/songmodel';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {
  @Input() song : ISongModel
  @Output() backEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  } 
  back(){
    this.backEvent.emit()
  }

}
