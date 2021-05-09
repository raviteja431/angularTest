import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "in28minutes"
  password = ''
  errormessage ="Invalid Credentials"
  inValidLogin = false

  constructor(private router:Router,
  
  private authService:HardcodedAuthenticationService ) { }

  ngOnInit() {
  }

  handleLogin()
  {
    
     console.log(this.username);
     
     //if(this.username=== "in28minutes" && this.password ==="dummy")
     if(this.authService.authenticate(this.username,this.password))
     {
           this.inValidLogin =false;
           console.log(this.inValidLogin);
           this.router.navigate(['welcome',this.username]);
     }else
     {
       this.inValidLogin = true;
     }
     

  }




}
