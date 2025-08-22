import {Component, OnInit} from '@angular/core';
import {Game} from '../../models/Game';
import {GamesService} from '../../service/games.service';
import {GameSharedService} from '../../service/game-shared.service';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {CommonModule, NgForOf} from '@angular/common';

@Component({
  selector: 'app-proximamente',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatIcon,
    NgForOf,
    CommonModule
  ],
  templateUrl: './proximamente.component.html',
  styleUrl: './proximamente.component.css'
})
export class ProximamenteComponent implements  OnInit {

  public games: Game[] = [];
  public addedGames: Game[] = [];

  constructor(
    private gamesService: GamesService,
    private gameShared: GameSharedService
  ) {
  }

  ngOnInit() {
    this.gamesService.getGames().subscribe((data: Game[]) => {
      this.games = data.filter(game => game.coming_soon);
      console.log(data);
    }, error => {
      console.error('Error fetching games:', error);
    });

  }

}
