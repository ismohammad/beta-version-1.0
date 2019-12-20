import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./dashboardmenusection.component.html",
  styleUrls: ["./dashboardmenusection.component.css"]
})
export class DashboardmenusectionComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("MenuComponent");
  }
}
