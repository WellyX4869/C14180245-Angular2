import { Injectable } from "@angular/core";

@Injectable()
export class GlobalvarService {
  public list = [];
  constructor() {}

  public AddNote(otherList){
    this.list.push(otherList);
  }

  public GetNotes(){
    return this.list;
  }

  public GetNote(index){
    return this.list[index];
  }
}
