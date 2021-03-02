import { Injectable } from "@angular/core";

@Injectable()
export class GlobalvarService {
  private Datanama: string = "usercoba";
  constructor() {}

  public getnama() {
    return this.Datanama;
  }

  public setnama(nama: string) {
    this.Datanama = nama;
  }
}
