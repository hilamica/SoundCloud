import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class soundCloudService {
  clientId = 'e59d8b005900e38649c1882b87cd828d';

  constructor(private httpClient: HttpClient) { }

  getTracks() {
    return this.httpClient.get(`${environment.soundCloudUrl}/tracks`, {
      params: {
        client_id: this.clientId
      }
    });
  }

  getPlaylist() {
    return this.httpClient.get(`${environment.soundCloudUrl}/playlists`, {
      params: {
        client_id: this.clientId
      }
    });
  }

}
