import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';    //#5 Import angular animation specific functions
import { DataService } from '../services/data.service';  //#7

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //#HTML Template#
  // template: `
  //   <p>You can also hard-code to create html directly by using template, using backticks</p>
  //   <P>It is useful if you only need small amount of codes</p>
  // `,

  styleUrls: ['./home.component.scss'],
  //#CSS Template, you can do the similar way of use as above toward css as following
  // styles:[`
  //   p { front-weight: bold; }
  //   div { color: gray;}
  //   `]
  //#5
  animations: [
    trigger('goals', [
      transition('* => *', [                                                  //#5 *=any: this this transition will get activated when any state goes to any state
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([                                 //#4 To define animations you use
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true}),

        query(':leave', stagger('300ms', [                                   //#5 To remove the item from the container
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))]), {optional: true})
      ])          
    ])
  ]

})

export class HomeComponent implements OnInit {
  
  // #To add item counterConmopent
  //itemCount: number = 4;
  itemCount: number;
  //#Add btnText property to interpret this property in the html file
  btnText: string = 'Add an item';                                                  //#3
  //#Setup goalText property
  goalText: string = 'My first life goal';                                          //#3
  //goals = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];  //#5
  goals = [];                                                                       //#7
  
  //#7 (private _data: DataService): To create the instance called "_data" to DataService, through dependency injection
  constructor(private _data: DataService) {}
  
  //#This one is a lifecycle hook which is initiated when the app loads or the component itself loads
  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);                            //#7 Now we have access to the goal where we subscribe the response to this.goals = res
    this.itemCount = this.goals.length;                                            //#7 Change the order with the below shis._data--
    this._data.changeGoal(this.goals);                                             //#7  
  }
  
  //#4 Create addItem methond in below
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';   //#To clear when the text is submitted
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);                                            //#7 Every time Item added we're going to change and update the goal property
  }
  //#5 Define removeItem method
  removeItem(i) {
    this.goals.splice(i, 1)       //#splice: javascript method
    this._data.changeGoal(this.goals);                                            //#7 Every time Item is removed we're going to change and update the goal property
  }

}
