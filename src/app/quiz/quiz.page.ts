import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  question1:string;
  question2:string;
  question3:string;
  question4:string;
  question5:string;
  question6:string;

  correctCount:number;
  constructor(private storage:Storage) { }

  ngOnInit() {

  }

  onCheckAnswers(){ //Checks if answer is correct and returns to Results Page

    //Unsure why but check answers needs to be clicked twice (Click once, go back to quiz page then Click again for correct results)
    

    this.correctCount = 0;

    if (this.question1 === "Correct") {

      this.correctCount++; // If Correct answer chosen, +1/6
      
    }else{
      this.question1 = "Incorrect";
    }

    if (this.question2 === "Correct") {

      this.correctCount++;
      
    }else{
      this.question2 = "Incorrect";
    }

    if (this.question3 === "Correct") {

      this.correctCount++;
      
    }else{
      this.question3 = "Incorrect";
    }

    if (this.question4 === "Correct") {

      this.correctCount++;
      
    }else{
      this.question4 = "Incorrect";
    }

    if (this.question5 === "Correct") {

      this.correctCount++;
      
    }else{
      this.question5 = "Incorrect";
    }

    if (this.question6 === "Correct") {

      this.correctCount++;
      
    }else{
      this.question6 = "Incorrect";
    }

    //Stores Variables to be used in Results Page
    this.storage.set("correctAmount", this.correctCount);
    this.storage.set("result1", this.question1);
    this.storage.set("result2", this.question2);
    this.storage.set("result3", this.question3);
    this.storage.set("result4", this.question4);
    this.storage.set("result5", this.question5);
    this.storage.set("result6", this.question6);



    
    console.log(this.correctCount)
  }
}


