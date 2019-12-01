import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { routerConfig } from "../router.config";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HomewidgetComponent } from './homewidget/homewidget.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routerConfig)],
  declarations: [AppComponent, HomeComponent, HomewidgetComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
