import { Component, OnInit } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'submodule';
  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.account = 'account';
    console.log("global service", this.globalService.account);
  }
}
