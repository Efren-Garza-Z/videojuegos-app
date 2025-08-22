import {Component, OnInit} from '@angular/core';
import {Game} from '../../models/Game';
import {GamesService} from '../../service/games.service';
import {GameSharedService} from '../../service/game-shared.service';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {CommonModule, NgForOf} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-mas-descargados',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatIcon,
    NgForOf,
    CommonModule
  ],
  templateUrl: './mas-descargados.component.html',
  styleUrl: './mas-descargados.component.css'
})
export class MasDescargadosComponent implements  OnInit {

  public games: Game[] = [];
  public addedGames: Game[] = [];

  constructor(
    private gamesService: GamesService,
    private gameShared: GameSharedService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.gamesService.getGames().subscribe((data: Game[]) => {
      this.games = data
        .sort((a, b) => b.downloads - a.downloads) // Mayor a menor
        .slice(0, 5);
      console.log(data);
    }, error => {
      console.error('Error fetching games:', error);
    });

  }

  public addGame(game: Game) {
    this.addedGames.push(game);
    this.gameShared.updateAddedGames(this.addedGames);
    this.snackBar.open('¡Juego agregado con éxito!', 'Cerrar', {
      duration: 3000, // milisegundos
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
    localStorage.setItem('games', JSON.stringify(this.addedGames));
    console.log(this.addedGames);
  }
}
