import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from 'src/app/service/data/welcome-data.service';
import { resetComponentState } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

   welcomeMessage : string;
   name:string;
  //ActivatedRoute...
  constructor(private route: ActivatedRoute,
   private service: WelcomeDataService) {

  


   }

  ngOnInit() {
       this.name =  this.route.snapshot.params['name'];
  }
  
  getWelcomeMsg()
  {
    this.service.executeHelloWordBeanService().subscribe(
      response => this.handleSuccessfulResponse(response.message),
      error => this.handleError(error)
      );
      
        console.log('last line of get welcome msg')
 
  }


  handleSuccessfulResponse(message)
  {
   this.welcomeMessage =message;
    
  }


  handleError(error)
  {
    this.welcomeMessage =error.error.message;
  }



}
