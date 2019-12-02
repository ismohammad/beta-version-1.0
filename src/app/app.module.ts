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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routerConfig)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HomewidgetComponent,
    DashboardComponent,
    DashboardwidgetComponent,
    MenuComponent,    
    HomewidgetmenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
