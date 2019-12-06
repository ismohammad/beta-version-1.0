import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AlertService } from "../service/alert.service";

@Component({
  selector: "alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"]
})
export class AlertComponent implements OnInit {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    console.log("AlertComponent", this.message);
    this.subscription = this.alertService.getMessage().subscribe(message => {
      this.message = message;
    });
  }
}
