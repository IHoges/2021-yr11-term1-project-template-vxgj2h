import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
declare const myTest: any;

@Component({
  selector: 'app-home',
  styleUrls: ['./add.component.css'],
  templateUrl: './add.component.html',
})
export class AddComponent {
  people: any;
  // Create Instance of PeopleService(ps) and MatDialog (dialog)
  constructor(private ps: PeopleService) {}

  ngOnInit(): void {
    this.people = this.ps.getUsers();
  } //end ngOnInit()
}

