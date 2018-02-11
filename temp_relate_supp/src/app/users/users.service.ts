import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }
  
  getUsersData()   {
    let response = this.http.get('https://jsoneditoronline.org/?id=1434740ba6e033455bae866a4411ddeb');
    console.log("response <<<>>>>", response);
    return response;
  }
}
