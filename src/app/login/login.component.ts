import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="welcome to luminar bank"
  account="Account Number Please"
  accno="";
  pwd="";
  
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  


  login(){
     var acno=this.accno;
    var pwd=this.pwd;
   let accDetails=this.ds.users
    var result=this.ds.login(acno,pwd);
    if(result)
    {
     
        alert("login successful")
        this.router.navigateByUrl("dashboard");
    }
     
    
  }


}
