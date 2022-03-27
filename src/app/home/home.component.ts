import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  people: any;

  today = new Date();
  edith = new Date((new Date()).valueOf() - 1000*60*60*48);
  jennifer = new Date((new Date()).valueOf() + 1000*60*60*48);
  timmy = new Date((new Date()).valueOf() + 1000*60*60*144);
  

  // Create Instance of PeopleService(ps) and MatDialog (dialog)
  constructor(private ps: PeopleService) {
  }



  ngOnInit(): void {
    this.people = this.ps.getUsers();
  } //end ngOnInit()


}

