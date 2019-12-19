import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  id: string;
  constructor(location: Location,route: ActivatedRoute) {
    route.params.subscribe(params => (this.id = params["id"]));
    console.log("Inside DashboardComponent constructor ID ",this.id);
    console.log("Inside DashboardComponent constructor  Locarion ",location.path());
  }

  ngOnInit() {
    console.log("Inside DashboardComponent");
  }
}
