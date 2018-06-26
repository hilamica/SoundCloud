import { Component } from '@angular/core';
import { soundCloudService } from './services/sound-cloud.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tracks = [];
  public fillterTracks = [];

  constructor(private _soundCloudService: soundCloudService) {
    this._soundCloudService.getTracks().subscribe((data: any[]) => {
      this.tracks = data;
      console.log(this.tracks);
    });

    this._soundCloudService.getPlaylist().subscribe(data => {
      console.log(data);
    })
  }


  search(query: string) {
    this.fillterTracks = this.tracks.filter(item => {
      if (item.title.includes(query)) {
        return item
      }
    });
  }
}
