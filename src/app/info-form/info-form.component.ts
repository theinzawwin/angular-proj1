import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators} from  '@angular/forms';
@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {
  

 
  infoForm= this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    body: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  get f(){
    return this.infoForm.controls;
  }
  
  submit(){
    console.log(this.infoForm.value);
  }
}
