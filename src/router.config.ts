import { Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { HomewidgetComponent } from "./app/homewidget/homewidget.component";
import { DashboardComponent } from "./app/dashboard/dashboard.component";
import { MenuComponent } from "./app/menu/menu.component";
import { DashboardwidgetComponent } from "./app/dashboardwidget/dashboardwidget.component";
import { HomewidgetmenuComponent } from "./app/homewidgetmenu/homewidgetmenu.component";
import { HomecontentComponent } from "./app/homecontent/homecontent.component";
import { ForgotpwdComponent } from "./app/forgotpwd/forgotpwd.component";
import { DashboardcontentComponent } from "./app/dashboardcontent/dashboardcontent.component";
import { ManageuserComponent } from "./app/manageuser/manageuser.component";
import { EdituserComponent } from './app/edituser/edituser.component'
import { ManageserviceComponent } from './app/manageservice/manageservice.component';

export const routerConfig: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: HomewidgetComponent
      },
      {
        path: "",
        outlet: "homemenu",
        component: HomewidgetmenuComponent
      }
    ]
  },
  {
    path: "feature/:id",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: HomecontentComponent
      },
       {
        path: "",
        outlet: "homemenu",
        component: HomewidgetmenuComponent
      }
    ]
  },
  {
    path: "_nav/:id",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: HomewidgetComponent
      },
      {
        path: "",
        outlet: "homemenu",
        component: HomewidgetmenuComponent
      }
    ]
  },

  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: DashboardwidgetComponent
      },
      {
        path: "",
        outlet: "sidemenu",
        component: MenuComponent
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
        component: MenuComponent
      }
    ]
  },
  {
    path: "editprofile/:id",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: EdituserComponent
      },
      {
        path: "",
        outlet: "sidemenu",
        component: MenuComponent
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
        component: MenuComponent
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
