import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {UsersService} from '../../../service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.css'],
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatLabel, ReactiveFormsModule, RouterLink]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.userService.getUsers().subscribe({
        next: users => {
          const user = users.find(u => u.email === email && u.password === password);

          if (user) {
            // Guardamos sesión en localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));

            // Redirigimos a dashboard u otra vista protegida
            this.router.navigate(['/dashboard']);
          } else {
            alert('Credenciales incorrectas');
          }
        },
        error: err => {
          console.error(err);
          alert('Error al intentar iniciar sesión');
        }
      });
    }
  }

}
