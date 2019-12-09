import { Component, OnInit } from "@angular/core";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private spinnerService: Ng4LoadingSpinnerService) {}

  ngOnInit() {
    console.log("this is HomeComponent");
  }
  showSpinner() {
    this.spinnerService.show();
    setTimeout(() => this.spinnerService.hide(), 3000);
  }
}
