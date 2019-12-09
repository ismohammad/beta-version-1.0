import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-homecontent",
  templateUrl: "./homecontent.component.html",
  styleUrls: ["./homecontent.component.css"]
})
export class HomecontentComponent implements OnInit {
  photography = false;
  music = false;
  health = false;
  id: string;
  
  constructor(route: ActivatedRoute) {
     console.log("HomecontentComponent",this.id);
    route.params.subscribe(params => (this.id = params["id"]));
   
  }

  ngOnInit() {
    this.gethomewidgetcontentbyid(this.id);
  }

  gethomewidgetcontentbyid(id)
  {
      if (this.id == "Photography") {
      console.log("this is photography", this.id);
      this.photography = true;
    }
    if (this.id == "Health") {
      console.log("this is health", this.id);
      this.health = true;
    }
    if (this.id == "Music") {
      console.log("this is music", this.id);
      this.music = true;
    }
  }
}
