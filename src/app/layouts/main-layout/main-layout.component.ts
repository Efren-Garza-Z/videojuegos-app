import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavarComponent} from '../../componentes/navbar/navar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, NavarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
