import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // private baseUrl="https://www.themuse.com/api/public/jobs?page=1";

  constructor(private http :HttpClient) { }

  getJobs(){
    return this.http.get<any>('https://www.themuse.com/api/public/jobs?page=1')
  }
}
