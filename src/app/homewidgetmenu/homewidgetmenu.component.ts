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
    this.setloginForm();
    this.setSignupForm();
  }
  setloginForm() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  setSignupForm() {
    this.signupForm = this.formBuilder.group({
      //signup_username: ["", [Validators.required, Validators.minLength(6)]],
      signup_username: ["", Validators.required],
      firstname: new FormControl(),
      lastname: ["", Validators.required]
    });
  }

  /**
   * This method calls authenticationService login mething to submit the login details
   */
  get loginvar() {
    return this.loginForm.controls;
  }
  onLoginSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log("This is username ", this.loginvar.username.value);
    console.log("This is password ", this.loginvar.password.value);
    console.log("This is onLogin -- returnUrl ", "dashboard");
    this.authenticationService
      .login(this.loginvar.username.value, this.loginvar.password.value)
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
   * This method calls authenticationService login mething to submit the login details
   */
  get signupvar() {
    return this.signupForm.controls;
  }
  onSignupSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
  }
  /**
   * This method navigate to respective UI based on the path
   */
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
      this.showLoginPage = false;
      this.showForgotPwdPage = false;
      this.showSignupPwdPage = true;
    }
    console.log("this.loginForm", this.loginForm);
    console.log("this.signupForm", this.signupForm);
  }
}
