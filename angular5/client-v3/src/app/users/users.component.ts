import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ImportMenuComponent} from '../import-menu/import-menu.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  tableData: any = {};
  users: any = [];
  @Input() usersFromCSV: any = [];
  constructor(private userService: UsersService,private modalService: NgbModal) { }


  ngOnInit() {
    this.getUsersData();
    this.formTableData();
  }
  ngOnChanges() {
    this.getUsersData();
    this.formTableData();
    console.log("usersFromCSV ?>><<< ",this.usersFromCSV);
  }
  getUsersData(){
    this.users = [];
    this.userService.getUsersData().subscribe((data) => {
      console.log('data ><<< ',  data);
      this.users = data;
    }, (error) => {
      console.log('error is ', error);
    }, () => {
      console.log('on complete <<>>> ');
    });
  }
  formTableData() {

    this.tableData = {
      title:'All Users',
      selectAll:true,
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
  open() {
    const modalRef = this.modalService.open(ImportMenuComponent,{windowClass:'lg'});
    modalRef.componentInstance.name = 'importMenu';
    modalRef.result.then((data) => {
      this.users = data;
      this.formTableData();
    }).catch((error) => {
      console.log("error catched here please check ",error);
    })
  }
}
