import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  id: string;
  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => (this.id = params["id"]));
    console.log("Inside DashboardComponent constructor ",this.id);
  }

  ngOnInit() {
    console.log("Inside DashboardComponent");
  }
}
