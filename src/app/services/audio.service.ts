import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private static player = new Audio();
  private url : string = "http://localhost/beat-vibes/tracks/" 
  private currentPlay : string = "";
  constructor() {
    
  } 

  public play(fileName : string): void{ 
    this.stop(this.currentPlay)
    AudioService.player.src = `${this.url}${fileName}`;
    AudioService.player.load()
    AudioService.player.play() 
    this.currentPlay = fileName;
  } 

  public stop(fileName : string) : void{
    AudioService.player.src = `${this.url}${fileName}`
    AudioService.player.pause()
    AudioService.player.currentTime = 0
  }
}
