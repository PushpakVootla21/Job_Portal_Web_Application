import { HttpClient } from "@angular/common/http";
import { Inject,Injectable } from "@angular/core";
import { User } from "../model/users.model";
import { BehaviorSubject } from "rxjs";
// const userid="id"
@Injectable({
    providedIn: 'root',
})

export class UserService{
     baseUrl: string = 'http://localhost:8080/users';
     constructor(private http: HttpClient){

     }
     getUsers(){
        return this.http.get<User[]>(this.baseUrl);
        // localStorage.setItem(userid, User.userId);

     }
     getUserById(id:number){
         return this.http.get<User>(this.baseUrl+'/'+id);
     }
     addUsers(user: User){
        return this.http.post(this.baseUrl,user);
     }
    //  public getProfile(){
    //     const userid=localStorage.getItem(userid)
    //     return this.http.get(this.baseUrl+"/"+userid);
    //   }
      
}