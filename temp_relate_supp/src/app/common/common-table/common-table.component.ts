import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent implements OnInit {
  @Input() tableData: any;
  constructor() { }

  ngOnInit() {
    console.log("this.tabledata ",this.tableData);
  }

}
