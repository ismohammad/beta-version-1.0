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
import { HomeComponent } from "../home/home.component";

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

  constructor(
    @Inject(FormBuilder)
    private formBuilder: FormBuilder,
    @Inject(Router) private router: Router,
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(AuthenticationService)
    private authenticationService: AuthenticationService,
    @Inject(HomeComponent)
    private homecomponent: HomeComponent
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
      signup_password: ["", [Validators.required, Validators.minLength(6)]],
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
    this.homecomponent.showSpinner();
    this.authenticationService
      .login(this.loginvar.username.value, this.loginvar.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(["dashboard"]);
        },
        error => {
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
    /**
     * Once service is called set the below parameters on success
     */
    console.log("this s onSignupSubmit");
    
    this.showLoginPage = true;
    this.showSignupPwdPage = false;
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
    /**
     * Once service is called set the below parameters  on success
     */
    this.homecomponent.showSpinner();
    this.showLoginPage = true;
    this.showForgotPwdPage = false;
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
    }
    if (this.page == "login") {
      this.showLoginPage = true;
      this.showForgotPwdPage = false;
      this.showSignupPwdPage = false;
      this.signupSubmitted = false;
      this.fPwdSubmitted = false;
    }
    if (this.page == "signup") {
      this.showLoginPage = false;
      this.showForgotPwdPage = false;
      this.showSignupPwdPage = true;
      this.loginSubmitted = false;
      this.fPwdSubmitted = false;
    }
  }
}
