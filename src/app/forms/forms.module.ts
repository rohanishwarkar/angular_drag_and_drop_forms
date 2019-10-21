import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormioModule } from 'angular-formio';
import { BuilderComponent } from './builder/builder.component';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
  ],
  declarations: [
    BuilderComponent,
  ],
  bootstrap: [
    
  ]
})
export class FormsModule { }
