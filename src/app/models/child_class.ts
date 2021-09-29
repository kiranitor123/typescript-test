import { HttpClient } from "@angular/common/http";
import { Parent_class } from "./parent_class";

export class Child_class extends Parent_class {

  constructor(private http: HttpClient){
    super();
  }
  bringPokes() {
    return this.http.get<any>(this.url).toPromise();
  }

}