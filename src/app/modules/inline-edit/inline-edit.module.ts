import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineInputEditComponent } from './inline-input-edit/inline-input-edit.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule
  ],
  declarations: [InlineInputEditComponent],
  exports: [InlineInputEditComponent, FormsModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule]
})
export class InlineEditModule { }
