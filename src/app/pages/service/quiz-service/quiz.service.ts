import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuizApi } from '../../api/quiz.api';
import { QuizRequest } from '../../model/QuizRequest';
import { Observable } from 'rxjs';
import { QuizResponse } from '../../model/QuizResponse';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  public getRandomQuiz(numberOfQuestions: number,quizNumber: number) {

    console.log(QuizApi.GET_RANDOM_QUIZ.replace('{numberOfQuestions}',numberOfQuestions.toString()).replace('{quizNumber}', quizNumber.toString()));
    return this.http.get(QuizApi.GET_RANDOM_QUIZ.replace('{numberOfQuestions}',numberOfQuestions.toString()).replace('{quizNumber}', quizNumber.toString()));
  }
  public getQuiz(numberOfQuestions: number,quizNumber: number,category: string,difficulty: string): Observable<QuizResponse> {
  
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(QuizApi.GET_QUIZ+"/"+numberOfQuestions.toString()+"/"+quizNumber.toString()+"/"+category+"/"+difficulty);
    return this.http.get<QuizResponse>(QuizApi.GET_QUIZ+"/"+numberOfQuestions.toString()+"/"+quizNumber.toString()+"/"+category+"/"+difficulty, { headers }  );

  }
}