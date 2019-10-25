import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  data = '';
  constructor() { }
  components  = {};
  ngOnInit() {
  }

  onSubmit(submission: any) {
    this.data = JSON.stringify(submission["data"]); // This will print out the full submission from Form.io API.
  }
}
