import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
   ){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: [''],
      password: ['']
    });
  }

  onSubmit(){
    console.log('User details sent to server..');
    this.userService.addUsers(this.registerForm.value)
    .subscribe((data)=>{
      console.log('Data Saved');
      this.registerForm.reset();
      this.router.navigate(['login']);
    })
  }
}
