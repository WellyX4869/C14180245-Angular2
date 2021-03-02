import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GlobalvarService } from "../globalvar.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public globalvar: GlobalvarService
  ) {}

  index = 0;
  note = [];
  ngOnInit() {
    this.index = parseInt(this.route.snapshot.paramMap.get("index"));
    this.note = this.globalvar.GetNote(this.index);
  }
}
