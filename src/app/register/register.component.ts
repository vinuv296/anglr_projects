import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cname=""
  acno=""
  actype=""
  pwd=""


  constructor(private router:Router,private ds:DataService, private fb:FormBuilder) 
   { }

  ngOnInit(): void {
  }
  register(){
    var cname=this.cname;
    var acno=this.acno;
    var actype=this.actype;
    var pwd=this.pwd;

    var result=this.ds.register(acno,cname,pwd,actype)
    if(result)
    {
      alert("successfully registered")
      this.router.navigateByUrl("");

    }
    else
    {
      alert("Account already created")
      this.router.navigateByUrl("");
    }
   
  }
}
