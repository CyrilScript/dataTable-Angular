import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {DataTableItem} from "./data-table-datasource";
import { Observable } from "rxjs";

@Injectable()
export class DataTableService{
  private _url: string = "https://api.jsonbin.io/b/609d7411a0df627e55293c19";

  constructor(private http:HttpClient){}

  getElements(): Observable<DataTableItem[]>{
    return this.http.get<DataTableItem[]>(this._url)
  }
}