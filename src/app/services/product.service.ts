import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  showMessage() {
    console.log("Service called");
  }

  private url = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  getAllProducts(numberOfResults:number=10) {
    return this.http.get(this.url+'/products', {
      params: {
        limit: numberOfResults.toString()
      }
    });
  }
}

