import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { UserService } from '../service/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jobs:any=[]
  constructor(private dashboardService:DashboardService) { }
  

  ngOnInit(): void {
    this.dashboardService.getJobs().subscribe((data)=>{
      this.jobs=data.results
    })
    }


  
  signOut(){
    sessionStorage.setItem('loggedIn','no');
  }
}
