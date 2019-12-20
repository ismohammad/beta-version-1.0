import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editservice',
  templateUrl: './editservice.component.html',
  styleUrls: ['./editservice.component.css']
})
export class EditserviceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $(document).ready(function() {
      $("#example").DataTable({
        aLengthMenu: [[5, 10, 25, -1], [5, 10, 25, "All"]],
        iDisplayLength: 5
      });
    }); 
  }

}