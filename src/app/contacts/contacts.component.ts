import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  username: string;
  email: string;
  text: string;

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    alert(this.username + ' ' + this.email + ' ' + this.text);
    this.username = null;
    this.email = null;
    this.text = null;
  }

}
