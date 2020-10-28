import { Component, OnInit } from '@angular/core';
import {DataServiceService}from '../data-service.service';
import { Todo } from '../todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  products:Todo[] = [];
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data: Todo[])=>{
      console.log(data);
      this.products = data;
    })  
  }

}
