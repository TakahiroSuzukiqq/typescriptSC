import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';         //#6 This will give us the access to the route parameters
import { Router } from '@angular/router';                 //#6.5 Import the router from the library, component based router navigation
import { DataService } from '../data.service';  //#7

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;                                                            //#7 Define the goals property so that you can use goals property in below

  //constructor(private route: ActivatedRoute) {                                                     //#6 (private route: ActivatedRoute): Dependency injection to create an instance of the activated routes
  //constructor(private route: ActivatedRoute, private router: Router) {                             //#6.5 Create the instance of the router through dependency injection
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {   //#7
    this.route.params.subscribe(res => console.log(res.id));                                         //#6 To fetch the route parameter in the component class
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);                  //#7
  }
  
  //#6.5
  sendMeHome() {
    this.router.navigate(['']);                                          //#6.5 This(['']) is corresponding to the path in app-routing.module.ts
  }
}
