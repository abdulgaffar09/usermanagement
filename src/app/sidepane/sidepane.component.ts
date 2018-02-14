import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gem-sidepane',
  templateUrl: './sidepane.component.html',
  styleUrls: ['./sidepane.component.scss']
})
export class SidepaneComponent implements OnInit {

 @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
