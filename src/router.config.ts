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
import { EdituserComponent } from "./app/edituser/edituser.component";

export const routerConfig: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: HomewidgetmenuComponent
      }
    ]
  },
   {
    path: "feature",
    component: HomewidgetComponent,
   },
  {
    path: "feature/:id",
    component: HomecontentComponent
  },
  /**
   * This is signup page router
   */
  {
    path: "_navsignup/:id",
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
    path: "_navfp/:id",
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
  /** The below are the Dashboard Componets related Routes */
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
    path: "item_1/:id",
    component: DashboardComponent,
    children: [
      {
        path: "",
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
    path: "item_2/:id",
    component: DashboardComponent,
    children: [
      {
        path: "",
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
    path: "item_3/:id",
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
