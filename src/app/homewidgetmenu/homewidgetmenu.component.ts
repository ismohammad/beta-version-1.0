import { Component, OnInit } from "@angular/core";
import { Inject } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-homewidgetmenu",
  templateUrl: "./homewidgetmenu.component.html",
  styleUrls: ["./homewidgetmenu.component.css"]
})
export class HomewidgetmenuComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl = "dashboard";
  showLogin = true;
  showForgotPwd = false;
  page: string;

  constructor(
    @Inject(FormBuilder)
    private formBuilder: FormBuilder,
    @Inject(Router) private router: Router,
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
    console.log("This is u#####sername return URL ", this.returnUrl);
  }
  get f() {
    return this.loginForm.controls;
  }

  onLogin() {
    this.showLogin = false;
    this.showForgotPwd = false;
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log("This is username ", this.f.username.value);
    console.log("This is password ", this.f.password.value);
    console.log("This is onLogin -- returnUrl ", this.returnUrl);

    this.router.navigate([this.returnUrl]);
  }

  navigate(path) {
    this.page = path;
    if (this.page == "fwdpage") {
      this.showLogin = false;
      this.showForgotPwd = true;
    }
    if (this.page == "home") {
      console.log("path122", path);
      this.showLogin = true;
      this.showForgotPwd = false;
    }

    console.log("path", path);
    this.router.navigate(["home"]);
  }
}
