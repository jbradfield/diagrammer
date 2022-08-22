import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class StorageService {

  constructor() { }

  getData(key: string): any {
    let jsonString = localStorage.getItem(key);
    return jsonString == null ? null : JSON.parse(jsonString);
  }

  setData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
