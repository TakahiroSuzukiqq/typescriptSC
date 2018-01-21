import { Component, OnInit } from '@angular/core';
import { HttpTestService } from '../http-test.service';

@Component({
  selector: 'app-http-test',
  //templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss'],
  template: `
  <button (click)="onTestGet()">Test Get Request</button><br>
  <p>Output: {{getData}}</p>
  <button (click)="onTestPost()">Test Post Request</button><br>
  <p>Output: {{postData}}</p>
  `,
  providers: [HttpTestService]
})
export class HttpTestComponent implements OnInit {

  getData: string;
  postData: string;
  
  constructor(private _httpService: HttpTestService) {}

  onTestGet() {
    this._httpService.getCurrentTime()
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
          () => console.log("Finished") 
      );
  }

  onTestPost() {
    this._httpService.postJSON()
      .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert(error),
          () => console.log("Finished") 
      );
  }

  ngOnInit() {}

}
