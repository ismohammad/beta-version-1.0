import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-homecontent",
  templateUrl: "./homewhatwedocontentsection.component.html",
  styleUrls: ["./homewhatwedocontentsection.component.css"]
})
export class HomewhatwedocontentsectionComponent implements OnInit {
  photography = false;
  music = false;
  health = false;
  id: string;
  
  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => (this.id = params["id"]));
    console.log("HomecontentComponent",this.id);
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
