import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { ImportMenuComponent } from './components/import-menu/import-menu.component';
import { CommonTableComponent } from './components/common-table/common-table.component';
import {DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule} from 'ngx-dropzone-wrapper';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UsersListService} from './components/users-list/users-list.service';
import {UsersListComponent} from './components/users-list/users-list.component';
import {SidepaneComponent} from './sidepane/sidepane.component';
import {HeaderComponent} from './header/header.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'text/*'
};


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ImportMenuComponent,
    UsersListComponent,
    SidepaneComponent,
    HeaderComponent,
    CommonTableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    DropzoneModule
  ],
  entryComponents: [ImportMenuComponent],
  providers: [
    UsersListService,
    HttpClient,
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
