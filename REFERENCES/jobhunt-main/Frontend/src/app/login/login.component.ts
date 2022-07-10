import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup
  message: any
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
    
  }
  login(){
    this.userService.getUsers()
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.userName===this.loginForm.value.username && a.password===this.loginForm.value.password;
      });
      if(user){
        // alert("Login success");
        this.loginForm.reset();
        sessionStorage.setItem('loggedIn','yes');
        this.router.navigate(['dashboard'])
      }
      else{
        alert('User not found');
        this.loginForm.reset();
      }
    })
  }
}
