import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImportMenuComponent } from './import-menu/import-menu.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { SidePanComponent } from './side-pan/side-pan.component';
import { CommonTableComponent } from './common/common-table/common-table.component';
import { UsersService } from './users/users.service';


@NgModule({
  declarations: [
    AppComponent,
    ImportMenuComponent,
    HeaderComponent,
    UsersComponent,
    SidePanComponent,
    CommonTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UsersService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
