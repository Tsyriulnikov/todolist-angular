import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthRoutingModule } from './auth-routing.module'
import { LoginComponent } from './components/login/login.component'
import { ReactiveFormsModule } from '@angular/forms'
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, MatCardModule, MatInputModule],
})
export class AuthModule {}
