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
  fPwdForm: FormGroup;

  loginSubmitted = false;
  signupSubmitted = false;
  fPwdSubmitted = false;
  showLoginPage = true;
  showForgotPwdPage = false;
  showSignupPwdPage = false;
  page: string;

  loadingLogin = false;
  loadingSignup = false;
  loadingFPwd = false;

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
    this.setForgotPwdForm();
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
  setForgotPwdForm() {
    this.fPwdForm = this.formBuilder.group({
      fPwdForm_username: ["", Validators.required]
    });
  }

  /**
   * This method calls authenticationService login mething to submit the login details
   */
  get loginvar() {
    return this.loginForm.controls;
  }
  onLoginSubmit() {
    this.loginSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loadingLogin = true;
    this.authenticationService
      .login(this.loginvar.username.value, this.loginvar.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(["dashboard"]);
        },
        error => {
          this.loadingLogin = false;
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
    this.signupSubmitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    this.loadingSignup = true;
    this.router.navigate(["dashboard"]);
  }

  /**
   * This method calls authenticationService login mething to submit the login details
   */
  get fPwdvar() {
    return this.fPwdForm.controls;
  }
  onForgetPasswordSubmit() {
    this.fPwdSubmitted = true;
    if (this.fPwdForm.invalid) {
      return;
    }
    this.loadingFPwd = true;
    this.router.navigate(["dashboard"]);
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
      this.signupSubmitted = false;
      this.loginSubmitted = false;
      this.loadingLogin = false;
      this.loadingSignup = false;
    }
    if (this.page == "login") {
      this.showLoginPage = true;
      this.showForgotPwdPage = false;
      this.showSignupPwdPage = false;
      this.signupSubmitted = false;
      this.fPwdSubmitted = false;
      this.loadingFPwd = false;
      this.loadingSignup = false;
    }
    if (this.page == "signup") {
      this.showLoginPage = false;
      this.showForgotPwdPage = false;
      this.showSignupPwdPage = true;
      this.loginSubmitted = false;
      this.fPwdSubmitted = false;
      this.loadingLogin = false;
      this.loadingFPwd = false;
    }
  }
}
