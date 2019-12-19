import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
 
   id: string;
  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => (this.id = params["id"]));
    console.log("Inside EdituserComponent constructor ",this.id);
  }

  ngOnInit() {
   
  }

}