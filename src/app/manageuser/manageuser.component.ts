import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-manageuser",
  templateUrl: "./manageuser.component.html",
  styleUrls: ["./manageuser.component.css"]
})
export class ManageuserComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
      $("#example").DataTable({
        aLengthMenu: [[5, 10, 25, -1], [5, 10, 25, "All"]],
        iDisplayLength: 5
      });
    });   
  }
}
