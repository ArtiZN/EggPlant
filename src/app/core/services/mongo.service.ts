import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, Inject } from '@angular/core';

export const MONGO_URL = new InjectionToken<string>("restUrl");

@Injectable({
  providedIn: 'root'
})
export class MongoService {

  constructor(private httpClient: HttpClient, @Inject(MONGO_URL) private uri: string) { }
}
