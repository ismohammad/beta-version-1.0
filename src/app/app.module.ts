import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { routerConfig } from "../router.config";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HomewidgetComponent } from './homewidget/homewidget.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { AboutwidgetComponent } from './aboutwidget/aboutwidget.component';
import { HomewidgetmenuComponent } from './homewidgetmenu/homewidgetmenu.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,RouterModule.forRoot(routerConfig)],
  declarations: [AppComponent, HomeComponent, HomewidgetComponent, AboutComponent, MenuComponent, AboutwidgetComponent, HomewidgetmenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
