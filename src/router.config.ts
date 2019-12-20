import { Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { DashboardComponent } from "./app/dashboard/dashboard.component";
import { DashboardmenusectionComponent } from "./app/dashboardmenusection/dashboardmenusection.component";
import { DashboardservicesectionComponent } from "./app/dashboardservicesection/dashboardservicesection.component";
import { HomeloginComponent } from "./app/homeloginsection/homeloginsection.component";
import { HomewhatwedocontentsectionComponent } from "./app/homewhatwedocontentsection/homewhatwedocontentsection.component";
import { ForgotpwdComponent } from "./app/forgotpwd/forgotpwd.component";
import { ManageuserComponent } from "./app/manageuser/manageuser.component";
import { ManageserviceComponent } from "./app/manageservice/manageservice.component";
import { SettingsComponent } from "./app/settings/settings.component";

export const routerConfig: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "",
        outlet: "homemenu",
        component: HomeloginComponent
      }
    ]
  },
  {
    path: "feature/:id",
    component: HomeComponent,
    children: [
      {
        path: "",
        outlet: "homemenu",
        component: HomeloginComponent
      }
    ]
  },
  {
    path: "_nav/:id",
    component: HomeComponent,
    children: [
      {
        path: "",
        outlet: "homemenu",
        component: HomeloginComponent
      }
    ]
  },

  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: DashboardservicesectionComponent
      },
      {
        path: "",
        outlet: "sidemenu",
        component: DashboardmenusectionComponent
      }
    ]
  },
  {
    path: "menu/:id",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: ManageuserComponent
      },
      {
        path: "",
        outlet: "sidemenu",
        component: DashboardmenusectionComponent
      }
    ]
  },
  {
    path: "settings",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: SettingsComponent
      },
      {
        path: "",
        outlet: "sidemenu",
        component: DashboardmenusectionComponent
      }
    ]
  },
  {
    path: "manageservice",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: ManageserviceComponent
      },
      {
        path: "",
        outlet: "sidemenu",
        component: DashboardmenusectionComponent
      }
    ]
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/home",
    pathMatch: "full"
  }
];
