import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {CommonModule, NgForOf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Game} from '../../models/Game';
import {GamesService} from '../../service/games.service';
import {UsersService} from '../../service/users.service';

@Component({
  selector: 'app-juegos-agregados',
  standalone: true,
  imports: [
    MatCard,
    NgForOf,
    CommonModule,
    MatCardContent,
    MatIcon
  ],
  templateUrl: './juegos-agregados.component.html',
  styleUrl: './juegos-agregados.component.css'
})
export class JuegosAgregadosComponent implements  OnInit {

  public games!: Game[];
  public showAlert = false;
  public alertMessage = '';

  constructor(
    private gamesService: GamesService,
    private usersService: UsersService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    const storedGames = localStorage.getItem('games');
    if (storedGames) {
      this.games = JSON.parse(storedGames);
    }
  }

  public removeGame(id: number) {
    this.games = this.games.filter(game => game.id !== id);
    localStorage.setItem('games', JSON.stringify(this.games));
  }

  buyGame(gameId: number) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const userId = currentUser.id;

    if (!userId) {
      this.showRetroAlert('Usuario no autenticado');
      return;
    }

    this.usersService.addGamesToUser(userId, [gameId]).subscribe({
      next: () => {
        this.snackBar.open('¡Juego comprado con éxito!', 'Cerrar', {
          duration: 3000, // milisegundos
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
        this.removeGame(gameId); // Quita el juego del localStorage visualmente
      },
      error: (err) => {
        this.snackBar.open('Error al comprar el juego', 'Cerrar', {
          duration: 3000,
          panelClass: ['snack-error']
        });
        console.error(err);
      }
    });
  }


  showRetroAlert(message: string) {
    this.alertMessage = message;
    this.showAlert = true;
    setTimeout(() => this.showAlert = false, 3000);
  }

}
