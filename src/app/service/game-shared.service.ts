// game-shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameSharedService {
  private addedGamesSource = new BehaviorSubject<Game[]>([]);
  addedGames$ = this.addedGamesSource.asObservable();

  updateAddedGames(games: Game[]) {
    this.addedGamesSource.next(games);
  }
}
