import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { User } from '../../models/user';

@Component({
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  selector: 'app-formulair',
  templateUrl: './formulair.html',
})
export class Formulair {
  user: User = new User();

  pays = ['France', 'Belgique', 'Suisse', 'Canada'];

  submittedUser: User | null = null;

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.submittedUser = { ...this.user };
    console.log('Utilisateur inscrit (Template-Driven) :', this.submittedUser);
  }

  reset(form: NgForm): void {
    this.user = new User();
    this.submittedUser = null;
    form.resetForm(this.user);
  }
}
