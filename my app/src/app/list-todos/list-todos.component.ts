import { Component, OnInit } from '@angular/core';


export class Todo
{
  constructor(
public id:number,
public description : string,
public isComplete : boolean,
public targetDate : string

  ) 
  {


  }



}





@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

todos =[

  new Todo(1,"Learn Subject",false,"By March"),
  new Todo(2,"Get H1",false,"By March"),
  new Todo(3,"Visit  India",false,"By October"),
  new Todo(1,"Apply Canada PR",false,"By Decemebr"),
  
  
  // {id:1, description: 'Learn Subject'},
  // {id:1, description: 'Get H1B'},
  // {id:1, description: 'Visit India'}

]



todo ={
   id:1,
   description: 'LKearn Dance'

}

  constructor() { }

  ngOnInit() {
  }

}
