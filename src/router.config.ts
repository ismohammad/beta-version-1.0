import { Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { HomewidgetComponent } from "./app/homewidget/homewidget.component";
import { AboutComponent } from "./app/about/about.component";
import { MenuComponent } from "./app/menu/menu.component";

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
        outlet: "sidemenu",
        component: MenuComponent
      }
    ]
  },
  {
    path: "about",
    component: AboutComponent
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
