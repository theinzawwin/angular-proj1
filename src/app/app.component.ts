import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Training at B&B';
  name='Testing';
  values = '';
  clickMe():void {
    alert('Hey');
  }
 

  onKey(event: any):void { // without type info
    this.values += event.target.value + ' | ';
  }
}
