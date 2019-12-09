import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-homewidget",
  templateUrl: "./homewidget.component.html",
  styleUrls: ["./homewidget.component.css"]
})
export class HomewidgetComponent {
  photography = false;
  constructor(private router: Router, private route: ActivatedRoute) {
    console.log("HomewidgetComponent");
  }

  navigate(path) {
    this.router.navigate([{ outlets: { primary: path, homemenu: path } }], {
      relativeTo: this.route
    });
  }
}
