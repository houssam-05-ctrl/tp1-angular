import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { User } from '../../models/user';

@Component({
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  selector: 'app-formulair-reactive',
  templateUrl: './formulair-reactive.html',
})
export class FormulairReactive {
  private readonly fb = inject(FormBuilder);

  readonly pays = ['France', 'Belgique', 'Suisse', 'Canada'];

  readonly form = this.fb.group({
    nom: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    age: [null as number | null, [Validators.required, Validators.min(18)]],
    pays: ['', [Validators.required]],
  });

  submittedUser: User | null = null;

  get nom() {
    return this.form.controls.nom;
  }

  get email() {
    return this.form.controls.email;
  }

  get age() {
    return this.form.controls.age;
  }

  get paysCtrl() {
    return this.form.controls.pays;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    this.submittedUser = {
      nom: value.nom ?? '',
      email: value.email ?? '',
      age: value.age,
      pays: value.pays ?? '',
    };
    console.log('Utilisateur inscrit (Reactive Forms) :', this.submittedUser);
  }

  reset(): void {
    this.form.reset();
    this.submittedUser = null;
  }
}
