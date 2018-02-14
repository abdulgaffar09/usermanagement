import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gem-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {


Hello= 'there'
  constructor() { }

  ngOnInit() {
  }

}
