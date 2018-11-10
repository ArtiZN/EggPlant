import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, Inject } from '@angular/core';

export const USER_URL = new InjectionToken<string>("usersUrl");

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient, 
    @Inject(USER_URL) private uri: string) { }

  getUser() {
    return this.httpClient.get(this.uri);
  }
}
