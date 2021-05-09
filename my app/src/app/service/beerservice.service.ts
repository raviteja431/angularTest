import { resetComponentState } from '@angular/core/src/render3/instructions';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerserviceService {
 
   response :any;
  

  constructor(private http : HttpClient) { }


   getBeers()
   {
     this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=2&sort=hot',{ observe:'response'}).subscribe( res => { console.log(res) ;
     this.response = res;
    });
    
    return this.response;
   
   }

}
