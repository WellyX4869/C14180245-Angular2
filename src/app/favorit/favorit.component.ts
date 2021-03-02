import { Component, OnInit } from "@angular/core";
import { GlobalvarService } from "../globalvar.service";

@Component({
  selector: "app-favorit",
  templateUrl: "./favorit.component.html",
  styleUrls: ["./favorit.component.css"]
})
export class FavoritComponent implements OnInit {
  constructor(public globalvar: GlobalvarService) {}

  fav = [];
  ngOnInit() {
    this.fav = this.globalvar.GetFavorite();
  }
}
