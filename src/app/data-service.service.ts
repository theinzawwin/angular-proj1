import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private REST_API_SERVER = "https://jsonplaceholder.typicode.com/todos";
  constructor(private httpClient: HttpClient) { }
  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
  public postTodo(t:string) {
    this.httpClient.post<any>('https://jsonplaceholder.typicode.com/posts', { title: t }).subscribe(data => {
      console.log(data.id); 
    return data.id;
  });
  }
}
