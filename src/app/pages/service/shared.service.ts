import { Injectable } from '@angular/core';
import { QuizResponse } from '../model/QuizResponse';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private difficulty:any;
  private category:any;
  
  constructor() 
  {
   
  }
  setData(difficulty:any,category:any)
  {
    this.difficulty=difficulty;
    this.category=category;
  }
  getDifficulty()
  {
    return this.difficulty;
  }
  getCategory()
  {
    return this.category;
  }

}
