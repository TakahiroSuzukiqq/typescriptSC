import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';   //#7 to share the data use rxjs behavior subject library

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);       //#7 new BehaviorSubject of type any: (['The initial goal'])=initial value
  goal = this.goals.asObservable();
  constructor() { }

  //#7
  changeGoal(goal) {
    this.goals.next(goal);                             
  }

}
