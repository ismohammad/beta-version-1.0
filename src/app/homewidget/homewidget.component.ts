import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
@Component({
  selector: "app-homewidget",
  templateUrl: "./homewidget.component.html",
  styleUrls: ["./homewidget.component.css"]
})
export class HomewidgetComponent implements OnInit {
  loginForm: FormGroup;
  constructor() {}

  ngOnInit() {}
}
