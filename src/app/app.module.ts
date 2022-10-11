import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodosModule} from "./todos/todos.module";
import {CoreModule} from "./core/core.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatMenuModule} from "@angular/material/menu";
import { NotifyComponent } from './shared/components/notify/notify.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MenuComponent } from './shared/components/menu/menu.component';
import {MenubarModule} from "primeng/menubar";


@NgModule({
  declarations: [
    AppComponent,
    NotifyComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodosModule,
    CoreModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
