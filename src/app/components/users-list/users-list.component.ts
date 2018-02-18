import {Component, Input, OnInit} from '@angular/core';
import {UsersListService} from './users-list.service';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ImportMenuComponent} from '../import-menu/import-menu.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'gem-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {
  animal: string; name: string;
  tableData: any = {};
  users: any = [];
  usersFromCSV: any = [];
  constructor(private usersListService: UsersListService,private modalService: NgbModal,
              public dialog: MatDialog) { }


  ngOnInit() {
    // this.getUsersData();
    this.formTableData();
  }
  ngOnChanges() {
    // this.getUsersData();
    this.formTableData();
    console.log("usersFromCSV ?>><<< ",this.usersFromCSV);
  }
  getUsersData(){
    this.users = [];
    this.usersListService.getUsersData().subscribe((data) => {
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
      data: this.users && this.users.length>0? this.users : this.usersFromCSV
    };
    console.log(' tableData ', this.tableData);
  }
  open() {
   /* const modalRef = this.modalService.open(ImportMenuComponent,{windowClass:'lg',size:'lg'});
    modalRef.componentInstance.name = 'importMenu';
    modalRef.result.then((data) => {
      this.users = data;
      this.formTableData();
    }).catch((error) => {
      console.log("error catched here please check ",error);
    })*/

    const dialogRef = this.dialog.open(ImportMenuComponent, {
      width: '500px',
      height:'400px',
      data: {name:this.name, animal:this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.users = result;
      this.formTableData();

    });
  }
}

