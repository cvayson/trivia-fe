export class QuizRequest
{
    private quizNumber:number;
    private numberOfQuestions:number;
    private category:String;
    private difficulty:String;

    public constructor(quizNumber:number,numberOfQuestions:number,category:String,difficulty:String)
    {
        this.quizNumber=quizNumber;
        this.numberOfQuestions=numberOfQuestions;
        this.category=category;
        this.difficulty=difficulty;

    }
    public getQuizNumber():number{return this.quizNumber;}
    public getNumberOfQuestions():number{return this.numberOfQuestions; }
    public getCategory():String{return this.category;}
    public getDifficulty():String{return this.difficulty;}

    public setQuizNumber(quizNumber:number){this.quizNumber=quizNumber;}
    public setNumberOfQuestions(numberOfQuestions:number){this.numberOfQuestions=numberOfQuestions;}
    public setCategory(category:String){this.category=category;}
    public setDifficulty(difficulty:String){this.difficulty=difficulty;}
}