import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalvarService } from "./globalvar.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  
  constructor(private router: Router, public globalvar: GlobalvarService) {}

  ngOnInit() {
    this.router.navigate(["/input"]);
  }

  Login() {
    this.router.navigate(["/input"]);
  }
}
