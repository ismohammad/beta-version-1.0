import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { routerConfig } from "../router.config";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HomewidgetComponent } from "./homewidget/homewidget.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MenuComponent } from "./menu/menu.component";
import { HomewidgetmenuComponent } from "./homewidgetmenu/homewidgetmenu.component";
import { DashboardwidgetComponent } from "./dashboardwidget/dashboardwidget.component";
import { ManageuserComponent } from "./manageuser/manageuser.component";
import { HomecontentComponent } from "./homecontent/homecontent.component";
import { AuthenticationService } from './service/authentication.service';
import { HttpClientModule  } from "@angular/common/http";
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { DashboardcontentComponent } from './dashboardcontent/dashboardcontent.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './service/alert.service';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { HomewhatwedosectionComponent } from './homewhatwedosection/homewhatwedosection.component';
import { HomepurchasesectionComponent } from './homepurchasesection/homepurchasesection.component';
import { ManageserviceComponent } from './manageservice/manageservice.component';
import { SettingsComponent } from './settings/settings.component';

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
    HomewidgetComponent,
    DashboardComponent,
    MenuComponent,
    HomewidgetmenuComponent,
    DashboardwidgetComponent,
    ManageuserComponent,
    HomecontentComponent,
    DashboardcontentComponent,
    AlertComponent,
    TopnavComponent,
    FooterComponent,
    HomewhatwedosectionComponent,
    HomepurchasesectionComponent,
    ManageserviceComponent,
    SettingsComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthenticationService, AlertService]
})
export class AppModule {}
