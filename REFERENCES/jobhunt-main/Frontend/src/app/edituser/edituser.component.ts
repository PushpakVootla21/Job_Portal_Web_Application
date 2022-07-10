import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { UserService } from '../service/users.service';
import { Router } from '@angular/router';
import { User } from '../model/users.model';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  // user:User
  public loginForm!:FormGroup
  messsage:any

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {
      // this.user=new User();
     }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
    // this.getprofile();
  }
// edituser(){
//   console.log(this.user);
//   this.userService.edituser(this.user).subscribe({
//     next:(data)=>{
// console.log(data)
// this.disp_msg='congrats'+this.user
  //   }
  // })
}

// getprofile(){
//   this.userService.getprofile().subscribe({
//     next(data)=>{
//       this.user.userName=data['userName'];
//       this.user.password=data['password'];
//       console.log(data)
//     },  
//     // error: (e) => {
//     //   console.log(e);
//     //   this.disp_msg =
//     //     'data not got';
//     // },
//   });
  
//}



