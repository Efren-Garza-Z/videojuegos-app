import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Game} from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private endPoint: string;

  constructor(private http: HttpClient) {
    this.endPoint = '/api/games';
  }

  getGames(): Observable<Game[]> {
    console.log('Calling /api/games');
    return this.http.get<Game[]>(this.endPoint);
  }
}
