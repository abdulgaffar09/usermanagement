import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  tableData: any = {};
  users: any = {};
  constructor(private userService: UsersService) { }
  ngOnInit() {
    this.formTableData();
  }
  formTableData() {
    this.users = [];
    this.userService.getUsersData().subscribe((data) => {
      console.log('data ><<< ',  data);
      this.users = data;
    }, (error) => {
      console.log('error is ', error);
    }, () => {
      console.log('on complete <<>>> ');
    });
    this.tableData = {
      fields : [
         {label: 'First Name', key: 'firstName'},
        {label: 'Last Name', key: 'lastName'},
        {label: 'Voice Name', key: 'voiceName'},
        {label: 'Role', key: 'role'}
      ],
      data: this.users
    };
    console.log(' tableData ', this.tableData);
  }
}
