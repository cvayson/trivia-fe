import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service'
import { QuizService } from '../service/quiz-service/quiz.service'
import { Observable, lastValueFrom } from 'rxjs';
import { Question } from '../model/Question';
import { QuizResponse } from '../model/QuizResponse';
import { Router } from '@angular/router';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  category: string = "";
  difficulty: string = "";
  quiz: QuizResponse;
  questions: Question[];
  counter:number=0;
  currentQuestion:Question;
  correctAnswers:number=0;
  answers:String[];
  correct:number=0;
  playAgain:boolean=false;
  contentQuestion:boolean=true;
  conentAnswers:boolean=true;
  quizNumber:number=0;
  
  constructor(private quizService:QuizService,private sharedService: SharedService ,private router:Router) { 
   
  
  }

   getQuiz() {
    this.category = this.sharedService.getCategory();
    this.difficulty = this.sharedService.getDifficulty();
    this.quizService.getQuiz(10,this.quizNumber,this.category, this.difficulty).subscribe((quiz:QuizResponse)=>{

        this.quiz=quiz;
        this.questions=quiz.questions;
    });
    this.conentAnswers=true;
    this.contentQuestion=true;
    this.playAgain=false;
    this.counter=0;
    this.correct=0;
  }
  nextQuestion(answer:any)
  { console.log("answers: "+this.answers)
    if(this.questions[this.counter].correctAnswer==answer)
    {
       this.correct++;
    }
    if(this.questions.length!=this.counter+1)
    {
     
     console.log(this.correct);
     this.counter++;
    
    }
    else
    this.finishQuiz();
   
  }
    
    
  
  finishQuiz()
  {
    console.log(this.correct+"/"+this.questions.length);
    this.playAgain=true;
    this.contentQuestion=false;
    this.conentAnswers=false;
    this.quizNumber++;

  }
  exit()
  {
    this.router.navigate(['/']);
  }
 
  async ngOnInit():Promise<void> {
    await this.getQuiz();
    this.answers=this.questions[this.counter].incorrectAnswers;
    this.answers.push(this.questions[this.counter].correctAnswer);
    
  }

}
