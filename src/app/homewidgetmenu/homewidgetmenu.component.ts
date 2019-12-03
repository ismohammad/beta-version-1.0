import { Component, OnInit } from "@angular/core";
import { Inject } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { first } from "rxjs/operators";
import { AuthenticationService } from "../service/authentication.service";

@Component({
  selector: "app-homewidgetmenu",
  templateUrl: "./homewidgetmenu.component.html",
  styleUrls: ["./homewidgetmenu.component.css"]
})
export class HomewidgetmenuComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;
  submitted = false;
  showLoginPage = true;
  showForgotPwdPage = false;
  showSignupPwdPage = false;
  page: string;
  loading = false;

  constructor(
    @Inject(FormBuilder)
    private formBuilder: FormBuilder,
    @Inject(Router) private router: Router,
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(AuthenticationService)
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl()
    });
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
    this.signupForm = new FormGroup({
      username: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl()
    });
    console.log("This is username return URL ", "HomewidgetmenuComponent");
  }
  get f() {
    return this.loginForm.controls;
  }
  /**
   * This method calls authenticationService login mething to submit the login details
   */
  onLoginSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log("This is username ", this.f.username.value);
    console.log("This is password ", this.f.password.value);
    console.log("This is onLogin -- returnUrl ", "dashboard");
    this.authenticationService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(["dashboard"]);
        },
        error => {
          this.loading = false;
          this.router.navigate(["dashboard"]);
        }
      );
  }
  /**
   * This method navigate to respective UI based on the path
   */
  navigate(path) {
    this.page = path;
    console.log("this.loginForm", this.signupForm);
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
  }
}
