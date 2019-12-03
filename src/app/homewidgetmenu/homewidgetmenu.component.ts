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
  showLoginPage = true;
  showForgotPwdPage = false;
  showSignupPwdPage = false;
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
    console.log("This is username return URL ", "HomewidgetmenuComponent");
  }
  get f() {
    return this.loginForm.controls;
  }

  onLogin() {
    this.showLoginPage = false;
    this.showForgotPwdPage = false;
    this.showSignupPwdPage = false;
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log("This is username ", this.f.username.value);
    console.log("This is password ", this.f.password.value);
    console.log("This is onLogin -- returnUrl ", "dashboard");

    this.router.navigate(["dashboard"]);
  }

  navigate(path) {
    this.page = path;
    if (this.page == "fwdpage") {
      this.showLoginPage = false;
      this.showForgotPwdPage = true;
      this.showSignupPwdPage = false;
    }
    if (this.page == "login") {
      this.showLoginPage = true;
      this.showForgotPwdPage = false;
      this.showSignupPwdPage = false;
    }
    if (this.page == "signup") {
      console.log("path122", path);
      this.showLoginPage = false;
      this.showForgotPwdPage = false;
      this.showSignupPwdPage = true;
    }

    console.log("path anme", path);
    console.log("this.showLogin", this.showLoginPage);
    console.log("this.showForgotPwd", this.showForgotPwdPage);
    console.log("this.showSignupPwdPage", this.showSignupPwdPage);
  }
}
