import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AuthGuard } from "./service/auth.guard";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegistrationComponent } from "./registration/registration.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SearchComponent } from "./search/search.component";
import { FavouritesComponent } from "./favourites/favourites.component";
import { EdituserComponent } from "./edituser/edituser.component";

export const routes:Routes = [
    {path: '',component:HomeComponent},
    {path: 'login',component:LoginComponent},
    {path: 'register',component: RegistrationComponent},
    {path: 'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
    {path: 'search',component:SearchComponent,canActivate:[AuthGuard]},
    {path: 'favourites',component:FavouritesComponent,canActivate:[AuthGuard]},
    {path: 'edituser',component:EdituserComponent,canActivate:[AuthGuard]},



  
    {path: '**',component:HomeComponent}
]

@NgModule({
    imports: [CommonModule,RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule{}