import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: `[app-servers]`,
  //selector: `.app-servers`,
  template: `<server-component></server-component>
    <hr />
    <server-component></server-component> `,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
