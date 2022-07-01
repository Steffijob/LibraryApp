
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  User = {username:'',
          password:''};
  userVerify()
  {
    alert("Successfully registered")
  }
  
  constructor() { }

  ngOnInit(): void {
    
  }
  

}
