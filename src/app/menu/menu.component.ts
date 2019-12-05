import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("MenuComponent");
  }
  navigate(path) {
    console.log("pathMenu", path);
     console.log("this.route", this.route);
    this.router.navigate([{ outlets: { primary: "dashboard/:"+path, sidemenu: path } }], {
      relativeTo: this.route
    });
  }
}
