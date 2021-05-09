import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(user,password)
  {

    if(user=== "in28minutes" && password ==="dummy")
    {
      sessionStorage.setItem('authUser',user)
      return true;
    }else
    {
    return false;
    }
    
  }

  isUserLoggedIn()
  {
      let user = sessionStorage.getItem('authUser');     
      return !(user===null);
  }



}
