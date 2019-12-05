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
        path: ":id",
        component: HomecontentComponent
      },
      {
        path: "",
        outlet: "homemenu",
        component: HomewidgetmenuComponent
      },
      {
        path: ":id",
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
        path: ":id",
        outlet: "sidemenu",
        component: MenuComponent
      },
      {
        path: ":id",
        component: DashboardcontentComponent
      },
      {
        path: "",
        outlet: "sidemenu",
        component: MenuComponent
      }
     
    ]
  },
   {
    path: "dashboard/:id",
     
   },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  /*{
    path: "**",
    redirectTo: "/home",
    pathMatch: "full"
  }*/
]
