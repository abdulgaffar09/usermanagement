import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gem-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {
  @Input() tableData: any;

  constructor() { }

  ngOnInit() {
    console.log('this.tabledata ' , this.tableData);
  }
}
