import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  detail: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form :NgForm){
    console.log(form);
  }
}
