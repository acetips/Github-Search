import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl=environment.UserUrl;

  private username!: string;
  private clientid='4d93b6a5a063e30c21c9';
  private clientsecret='b0fc043a1e1e3eb7fb59d81a52a5371bd0afa351';

  constructor( private http: HttpClient) { 
    console.log("The service is running!");
    this.username = 'acetips';
  }
  getUserInfo(){
    return this.http.get<any[]>(`${this.baseUrl}${this.username}+?client_id= ${this.clientid}&client_secret= ${this.clientsecret}`,{}).toPromise()
  }
}
