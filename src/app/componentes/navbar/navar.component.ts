import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import { MatButton} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButton, MatButtonModule, MatMenuModule],
  templateUrl: './navar.component.html',
  styleUrl: './navar.component.css'
})
export class NavarComponent {

  constructor(private router: Router) {
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }


  protected readonly MatButton = MatButton;
}
