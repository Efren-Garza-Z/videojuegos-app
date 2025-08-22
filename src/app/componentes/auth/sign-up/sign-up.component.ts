import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Router, RouterLink} from '@angular/router';
import {UsersService} from '../../../service/users.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UsersService,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmarPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { name, email, password, confirmarPassword } = this.loginForm.value;

      if (password !== confirmarPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }

      const user = { name, email, password };

      this.userService.createUser(user).subscribe({
        next: () => {
          this.snackBar.open('Usuario creado con éxito 🎉', 'Cerrar', {
            duration: 3000, // milisegundos
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
          alert('Usuario creado con éxito 🎉');
          this.router.navigate(['/login']);
        },
        error: err => {
          console.error(err);
          this.snackBar.open(`Error: ${err}`, 'Cerrar', {
            duration: 3000, // milisegundos
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        }
      });
    }
  }

}
