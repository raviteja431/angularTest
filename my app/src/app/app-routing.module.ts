import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';
import { ErrorComponent } from 'src/app/error/error.component';
import { RouteGuardService } from 'src/app/service/route-guard.service';
import { BeerComponentComponent } from 'src/app/beer-component/beer-component.component';
import { BreweriesComponentComponent } from 'src/app/breweries-component/breweries-component.component';

// const routes: Routes = [
//   {path:'',component :LoginComponent},// we can specify when to activate....  Using routeGuard
// {path:'login',component :LoginComponent},
// {path:'beer',component :BeerComponentComponent , canActivate:[RouteGuardService]},
// {path:'welcome/:name',component :WelcomeComponent , canActivate:[RouteGuardService]},
// {path:'todos',component :ListTodosComponent, canActivate:[RouteGuardService]},
// {path:'**',component :ErrorComponent, canActivate:[RouteGuardService]}

// ];

const routes: Routes = [
  //{path:'',component :BeerComponentComponent},// we can specify when to activate....  Using routeGuard
{path:'beer',component :BeerComponentComponent},
{path:'breweries',component :BreweriesComponentComponent},
{path:'**',component :ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
