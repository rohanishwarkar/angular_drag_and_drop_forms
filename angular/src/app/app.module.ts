import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { FormioGrid } from 'angular-formio/grid';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { PrismService } from './Prism.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FormService} from './shared/form.service'

import { AppConfig } from './config';
import { AppComponent } from './app.component';
import { BuilderComponent } from './forms/builder/builder.component';
import { FormComponent } from './form/form.component';
import { EditorComponent } from './editor/editor.component';
// Make sure we use fontawesome everywhere in Form.io renderers.
const Formio = require('formiojs').Formio;
Formio.icons = 'fontawesome';

/**
 * Import the Custom component CheckMatrix.
 */
// import './components/CheckMatrix';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    FormComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormioModule,
    HttpClientModule,
    FormsModule,
    FormioGrid,
    RouterModule.forRoot([
      {
        path: '',
        component: BuilderComponent
      },
      {
        path: 'forms/builder',
        component: BuilderComponent
      },
      {
        path: 'manager',
        component: FormComponent,
      },
      {
        path: 'manager/edit',
        component: EditorComponent,
      }
    ], {useHash: true})
  ],
  providers: [
    PrismService,
    FormService,
    FormioAuthService,
    {provide: FormioAppConfig, useValue: AppConfig},
    {provide: FormioAuthConfig, useValue: {
      login: {
        form: 'user/login'
      },
      register: {
        form: 'user/register'
      }
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
