import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-homewidget",
  templateUrl: "./homewidget.component.html",
  styleUrls: ["./homewidget.component.css"]
})
export class HomewidgetComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigate(path) {
    this.router.navigate([{ outlets: { primary: path, sidemenu: path } }], {
      relativeTo: this.route
    });
  }
}
