import { ActivatedRoute } from '@angular/router';
import { BeerserviceService } from './../service/beerservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-component',
  templateUrl: './beer-component.component.html',
  styleUrls: ['./beer-component.component.css']
})
export class BeerComponentComponent implements OnInit {

  response :any;

  constructor(private route: ActivatedRoute,
    private service: BeerserviceService) { }

  ngOnInit() {
  }

  getBeerData()
  {
    
  }

}
