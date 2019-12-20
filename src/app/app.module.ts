import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { routerConfig } from "../router.config";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardmenusectionComponent } from "./dashboardmenusection/dashboardmenusection.component";
import { HomeloginComponent } from "./homeloginsection/homeloginsection.component";
import { ManageuserComponent } from "./manageuser/manageuser.component";
import { HomewhatwedocontentsectionComponent } from "./homewhatwedocontentsection/homewhatwedocontentsection.component";
import { AuthenticationService } from './_service/authentication.service';
import { HttpClientModule  } from "@angular/common/http";
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { DashboardservicesectionComponent } from './dashboardservicesection/dashboardservicesection.component';
import { AlertComponent } from './_alert/alert.component';
import { AlertService } from './_service/alert.service';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { HomewhatwedosectionComponent } from './homewhatwedosection/homewhatwedosection.component';
import { HomepurchasesectionComponent } from './homepurchasesection/homepurchasesection.component';
import { ManageserviceComponent } from './manageservice/manageservice.component';
import { SettingsComponent } from './settings/settings.component';
import { NewserviceComponent } from './newservice/newservice.component';
import { EditserviceComponent } from './editservice/editservice.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    DashboardmenusectionComponent,
    HomeloginComponent,
    DashboardservicesectionComponent,
    ManageuserComponent,
    HomewhatwedocontentsectionComponent,
    DashboardservicesectionComponent,
    AlertComponent,
    TopnavComponent,
    FooterComponent,
    HomewhatwedosectionComponent,
    HomepurchasesectionComponent,
    ManageserviceComponent,
    SettingsComponent,
    NewserviceComponent,
    EditserviceComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthenticationService, AlertService]
})
export class AppModule {}
