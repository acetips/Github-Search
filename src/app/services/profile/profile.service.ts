import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username!: string;
  private clientId='';

  constructor( private http: HttpClient) { 
    console.log("The service is running!");
    this.username = 'acetips';
  }
  getUserInfo(){
    return this.http.get("")
  }
}
