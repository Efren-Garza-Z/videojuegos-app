import {Routes} from '@angular/router';
import {LoginComponent} from './componentes/auth/login/login.component';
import {SignUpComponent} from './componentes/auth/sign-up/sign-up.component';
import {DashboardComponent} from './componentes/dashboard/dashboard.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {JuegosAgregadosComponent} from './componentes/juegos-agregados/juegos-agregados.component';
import {MasDescargadosComponent} from './componentes/mas-descargados/mas-descargados.component';
import {MasPopularesComponent} from './componentes/mas-populares/mas-populares.component';
import {ProximamenteComponent} from './componentes/proximamente/proximamente.component';
import { authGuard } from './guards/auth.guard'; // asegúrate de importar bien

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login',
        component: LoginComponent },
      {
        path: '',
        component: SignUpComponent,
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
      },
      {
        path: 'juegos-agregados',
        component: JuegosAgregadosComponent,
        canActivate: [authGuard],
      },
      {
        path: 'mas-descargados',
        component: MasDescargadosComponent,
        canActivate: [authGuard],
      },
      {
        path: 'mas-populares',
        component: MasPopularesComponent,
        canActivate: [authGuard],
      },
      {
        path: 'proximamente',
        component: ProximamenteComponent,
        canActivate: [authGuard],
      },
    ]
  },

];
