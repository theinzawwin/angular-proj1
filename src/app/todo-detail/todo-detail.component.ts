import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  postId:number;
  todoForm= this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    
  });
  constructor(private fb: FormBuilder,private dataService: DataServiceService) { }
    @Input()
    todo:Todo;
  ngOnInit(): void {
  }

  get f(){
    return this.todoForm.controls;
  }
  
  todoSubmit(){
    this.dataService.postTodo(this.todoForm.get('title')!.value);
    console.log(this.todoForm.value);

  }
}
