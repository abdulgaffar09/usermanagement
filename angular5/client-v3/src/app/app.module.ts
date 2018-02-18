import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImportMenuComponent } from './import-menu/import-menu.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { SidePanComponent } from './side-pan/side-pan.component';
import { CommonTableComponent } from './common/common-table/common-table.component';
import { UsersService } from './users/users.service';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'text/csv'
};


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
    HttpClientModule,
    NgbModule.forRoot(),
    DropzoneModule
  ],
  entryComponents: [ImportMenuComponent],
  providers: [
    UsersService,
    HttpClient,
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
