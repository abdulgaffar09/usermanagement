import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from './users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  tableData: any = {};
  users: any = {};
  @Input() usersFromCSV: any;
  constructor(private userService: UsersService) { }


  ngOnInit() {
    this.formTableData();
  }
  ngOnChanges() {
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
         {label: 'First Name', key: 'first_name'},
        {label: 'Last Name', key: 'last_name'},
        {label: 'Voice Name', key: 'voice_name'},
        {label: 'Role', key: 'roles'}
      ],
      data: this.users.length>0? this.users : this.usersFromCSV
    };
    console.log(' tableData ', this.tableData);
  }
}
