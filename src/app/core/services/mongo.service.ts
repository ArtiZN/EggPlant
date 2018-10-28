import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs';

export const MONGO_URL = new InjectionToken<string>("restUrl");

@Injectable({
  providedIn: 'root'
})
export class MongoService {

  constructor(private httpClient: HttpClient, @Inject(MONGO_URL) private uri: string) { }

  // HTTP GET
  getDocuments(sDatabaseName: string, sCollectionName: string): Observable<any> {
    return this.httpClient
      .get(`${this.uri}?sDatabaseName=${sDatabaseName}&sCollectionName=${sCollectionName}`);
  }

  // HTTP POST
  getFilteredDocuments(sDatabaseName: string, sCollectionName: string, jsonData: any): Observable<any> {
    return this.httpClient
      .post(`${this.uri}?sDatabaseName=${sDatabaseName}&sCollectionName=${sCollectionName}&sMode=filtering`, jsonData);
  }

  addAllDocuments(sDatabaseName: string, sCollectionName: string, jsonData: any): Observable<any> {
    return this.httpClient
     .post(`${this.uri}?sDatabaseName=${sDatabaseName}&sCollectionName=${sCollectionName}&sMode=insertMany`, jsonData);
  }

  addOneDocument(sDatabaseName: string, sCollectionName: string, jsonData: any): Observable<any> {
    return this.httpClient
     .post(`${this.uri}?sDatabaseName=${sDatabaseName}&sCollectionName=${sCollectionName}&sMode=insertOne`, jsonData);
  }

  // HTTP PUT
  updateDocument(id: string, sDatabaseName: string, sCollectionName: string, sValidator: string, jsonData: any): Observable<any> {
    return this.httpClient
      .put(`${this.uri}/${id}?sDatabaseName=${sDatabaseName}&sCollectionName=${sCollectionName}&sValidator=${sValidator}`, jsonData);
  }
}
