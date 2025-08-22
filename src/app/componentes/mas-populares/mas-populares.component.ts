import {Component, OnInit} from '@angular/core';
import {Game} from '../../models/Game';
import {GamesService} from '../../service/games.service';
import {GameSharedService} from '../../service/game-shared.service';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {CommonModule, NgForOf} from '@angular/common';

@Component({
  selector: 'app-mas-populares',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatIcon,
    NgForOf,
    CommonModule
  ],
  templateUrl: './mas-populares.component.html',
  styleUrl: './mas-populares.component.css'
})
export class MasPopularesComponent implements  OnInit {

  public games: Game[] = [];
  public addedGames: Game[] = [];

  constructor(
    private gamesService: GamesService,
    private gameShared: GameSharedService
  ) {
  }

  ngOnInit() {
    this.gamesService.getGames().subscribe((data: Game[]) => {
      this.games = data
        .sort((a, b) => Number(b.rating) - Number(a.rating)) // Mayor rating primero
        .slice(0, 5);
      console.log(data);
    }, error => {
      console.error('Error fetching games:', error);
    });

  }

  public addGame(game: Game) {
    this.addedGames.push(game);
    this.gameShared.updateAddedGames(this.addedGames);
    localStorage.setItem('games', JSON.stringify(this.addedGames));
    console.log(this.addedGames);
  }
}
