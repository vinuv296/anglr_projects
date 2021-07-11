import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acnum1=""
  pwd1=""
  amt1=""
  acnum2=""
  pwd2=""
  amt2=""
  constructor() { }

  ngOnInit(): void {
  }
  deposite(){
    alert("deposite")
  }
  withdraw(){
    alert("withdraw")
  }


  

}
