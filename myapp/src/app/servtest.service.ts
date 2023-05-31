import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServTestService {
  private url = 'http://localhost:3000/services/user/646638e8c7b9a011beca82c1'

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.url)
  }

  post(postUrl: String ,payload: Object) {
    return this.httpClient.post(`${postUrl}`, payload)
  }
  delete(deleteUrl: String) {
    return this.httpClient.delete(`${deleteUrl}`)
  }
  

}
