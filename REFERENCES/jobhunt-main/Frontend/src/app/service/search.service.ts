import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl =  "https://www.themuse.com/api/public/jobs?page=";
  constructor(private http:HttpClient) { }

  search(page:any){
    return this.http.get<any>(this.baseUrl+page)
  }
 
}
