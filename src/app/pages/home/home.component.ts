import { Component, OnInit } from '@angular/core';
import { QuizService } from '../service/quiz-service/quiz.service';
import { QuizRequest } from '../model/QuizRequest';
import { Category } from '../model/Categories';
import { QuizResponse } from '../model/QuizResponse';
import { lastValueFrom } from 'rxjs';
import {  Navigation, Router } from '@angular/router';
import { SharedService } from '../service/shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private quizService: QuizService,private sharedService:SharedService,private router:Router) { }

  selectCategory:any;
  selectDifficulty:any;
  showHome=true;
  showChoose=false;
  quiz:any;
  categories=Object.values(Category);
  quizRequest=new QuizRequest(0,10,"Georaphy","medium");
  choose()
  {
    this.showHome=!this.showHome;
    this.showChoose=!this.showChoose;

  }
  getRandomQuiz()
  {
    this.quizService.getRandomQuiz(10,0).subscribe(data=>{
      console.log(data);
    });    
  }
  startQuiz()
  { 

    this.sharedService.setData(this.selectDifficulty,this.selectCategory);
    this.router.navigate(['/play']);

  }
   
  
  ngOnInit(): void {
    this.showHome=true;
    this.showChoose=false;
    console.log(this.categories);
  }

}
