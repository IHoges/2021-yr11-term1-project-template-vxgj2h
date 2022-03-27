import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./list.component.css'],
  templateUrl: './list.component.html',
})
export class ListComponent {
  people: any;
  // Create Instance of PeopleService(ps) and MatDialog (dialog)
  constructor(private ps: PeopleService) {
  }



  ngOnInit(): void {
    this.people = this.ps.getUsers();
  } //end ngOnInit()


}