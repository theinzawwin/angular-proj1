import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  items=['Item 1','Item 2','Item 3','Item 4'];
  item1='';
  constructor() { }

  ngOnInit(): void {
  }

  itemSelect(item:string):void{
    this.item1=item;
    alert('Your selected Item is '+item);
  }

}
