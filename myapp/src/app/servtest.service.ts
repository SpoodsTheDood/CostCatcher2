import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServTestService {
  private url = 'http://localhost:3000/services/user/646638e8c7b9a011beca82c1'
  private deleteUrl = ""

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.url)
  }

  post(url: String, payload: Object) {
    return this.httpClient.post(this.url, payload)
  }
  delete() {
    return this.httpClient.delete(this.deleteUrl)
  }
  

}
