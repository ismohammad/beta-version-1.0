import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dashboardcontent",
  templateUrl: "./dashboardcontent.component.html",
  styleUrls: ["./dashboardcontent.component.css"]
})
export class DashboardcontentComponent implements OnInit {
  photography = false;
  music = false;
  health = false;
  id: string;
  constructor(route: ActivatedRoute) {
    console.log("Inside DashboardcontentComponent");
    route.params.subscribe(params => (this.id = params["id"]));
  }

  ngOnInit() {
    if (this.id == "Photography") {
      console.log("this is photography", this.id);
      this.photography = true;
    }
    if (this.id == "Health") {
      console.log("this is health", this.id);
      this.health = true;
    }
    if (this.id == "Music") {
      console.log("this is music", this.id);
      this.music = true;
    }
  }
}
