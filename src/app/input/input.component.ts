import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalvarService } from "../globalvar.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  constructor(private router: Router, public globalvar: GlobalvarService) {}

  judul: string = "";
  isi: string = "";
  tanggal: Date;
  validasi: string = "";

  notes = [];
  ngOnInit() {
    this.notes = this.globalvar.GetNotes();
  }

  Tambah() {
    if (!this.tanggal || this.judul == "" || this.isi == "") {
      this.validasi = "Ada hal yang belum terisi!";
    } else {
      this.validasi = "";
      let list = [this.judul, this.isi, this.tanggal];
      this.globalvar.AddNote(list);
    }
  }

  Akses(index) {
    this.router.navigate(["/detail/" + index]);
  }
}
