import { Component, OnInit} from '@angular/core';
import { TrackerService } from '../Service/tracker.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
CountryTracker:any[];
searchCountry:string = "";
  constructor(private trackerService:TrackerService) { 


  }

performSearch(){
  console.log(this.searchCountry);
  this.trackerService.GetSearchData(this.searchCountry).subscribe(
    (data)=>{
      this.CountryTracker = data
    }
  );
}

ngOnInit() {
 this.trackerService.GetLatestCovidData().subscribe(
    (data)=>{
      this.CountryTracker = data

    }
   );
}

}
