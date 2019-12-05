import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dashboardcontent",
  templateUrl: "./dashboardcontent.component.html",
  styleUrls: ["./dashboardcontent.component.css"]
})
export class DashboardcontentComponent implements OnInit {
  id: string;

  constructor(route: ActivatedRoute) {
    console.log("Inside DashboardcontentComponent");
    route.params.subscribe(params => (this.id = params["id"]));
  }

  ngOnInit() {}
}
