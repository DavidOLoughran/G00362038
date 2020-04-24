import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
correctCount:number;
result1:String;
result2:String;
result3:String;
result4:String;
result5:String;
result6:String;

  constructor(private storage:Storage) { }

  ngOnInit() {

    this.storage.get("correctAmount").then(
      (data)=>{
        this.correctCount = data; 
      }
    ).catch(
      ()=>{
        console.log("Error")
      }
    );

    this.storage.get("result1").then(
      (data)=>{
        this.result1 = data; 
      }
    ).catch(
      ()=>{
        console.log("Error")
      }
    );

    this.storage.get("result2").then(
      (data)=>{
        this.result2 = data; 
      }
    ).catch(
      ()=>{
        console.log("Error")
      }
    );

    this.storage.get("result3").then(
      (data)=>{
        this.result3 = data; 
      }
    ).catch(
      ()=>{
        console.log("Error")
      }
    );

    this.storage.get("result4").then(
      (data)=>{
        this.result4 = data; 
      }
    ).catch(
      ()=>{
        console.log("Error")
      }
    );

    this.storage.get("result5").then(
      (data)=>{
        this.result5 = data; 
      }
    ).catch(
      ()=>{
        console.log("Error")
      }
    );

    this.storage.get("result6").then(
      (data)=>{
        this.result6 = data; 
      }
    ).catch(
      ()=>{
        console.log("Error")
      }
    );

 


  }

  
    
}
