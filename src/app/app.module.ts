import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {TodosModule} from "./todos/todos.module";
import {CoreModule} from "./core/core.module";
import { LoginComponent } from './auth/components/login/login.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatMenuModule} from "@angular/material/menu";
import { NotifyComponent } from './shared/components/notify/notify.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    TodosModule,
    CoreModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
