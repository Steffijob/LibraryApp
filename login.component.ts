import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  User = {username:'',
          password:''};
  userVerify()
  {
    alert("Successful Login")
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
