import {Question} from "./Question";
export class QuizResponse
{
    questions:Question[];
    numberOfQuestions: number;
    quizNumber:  number;

    constructor(questions:Question[], numberOfQuestions:number, quizNumber:number)
    {
        this.questions = questions;
        this.numberOfQuestions = numberOfQuestions;
        this.quizNumber = quizNumber;
    
    }


}