import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-stayactive',
  templateUrl: './stayactive.page.html',
  styleUrls: ['./stayactive.page.scss'],
})
export class StayactivePage implements OnInit {

  time: BehaviorSubject<string> = new BehaviorSubject('00:00');

  timer: number;
  interval;
  amountPushups20:any = 0;
  amountPushups1:any = 0;
  amountPushups3:any = 0;

  amountSitups20:any = 0;
  amountSitups1:any = 0;
  amountSitups3:any = 0;

  timeframe:String;

  update:number;

  constructor(private vibration: Vibration) { }



  pushups: object[] =
  [{time: "20 Seconds ", workout1: "PushUps", workout2: "SitUps"},
  {time: "1 Minute ", workout1: "PushUps", workout2: "SitUps" },
  {time: "3 Minutes ", workout1: "PushUps", workout2: "SitUps" },
  ] 


  //Code Inspired from youtube video for timer youtube.com/watch?v=aOHJRqvcjTL     Title: Ionic 4 Projects: Adding Timer Functionality | packetpub.com
  //Did attempt this on my own but wasn't working properly so adapted this version
  updatePBp(){
    if (this.timeframe === "20") {
      if (this.amountPushups20 < this.update) {

        this.amountPushups20 = this.update;
        console.log(this.amountPushups20);
    
      }
    } else if (this.timeframe === "1") {
      if (this.amountPushups1 < this.update) {

        this.amountPushups1 = this.update;
    }
    } else if (this.timeframe === "3") {
      if (this.amountPushups3 < this.update) {

        this.amountPushups3 = this.update;
      }
    }


  }
  //Updates Each PB depending on time selected
  updatePBs(){
    if (this.timeframe === "20") {
      if (this.amountSitups20 < this.update) {

        this.amountSitups20 = this.update;
        console.log(this.amountSitups20);
    
      }
    } else if (this.timeframe === "1") {
      if (this.amountSitups1 < this.update) {

        this.amountSitups1 = this.update;
    }
    } else if (this.timeframe === "3") {
      if (this.amountSitups3 < this.update) {

        this.amountSitups3 = this.update;
      }
    }


  }
 //Initiates Timer
  start(duration: number){
    clearInterval(this.interval);
    this.timer = duration * 60;
    this.interval = setInterval( ()=>{
      this.updateTime();

    }, 1000)

      
  }
  //Updates Timer when counting down
  updateTime(){
    let mins: any = this.timer / 60;
    let secs: any = this.timer % 60;

    mins = String('0' + Math.floor(mins)).slice(-2);
    secs = String('0' + Math.floor(secs)).slice(-2);

    const text = mins + ':' + secs;
    this.time.next(text);

    --this.timer;
    //If Timer reaches 0, Timer stops and Vibrates phone using Vibrate Plugin
    if(this.timer < 0){
      clearInterval(this.interval);
      this.time.next('00:00');
      this.vibration.vibrate([2000,1000,2000]);
      

    }
  }





  ngOnInit() {
  }

}
