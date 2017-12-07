import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quotes =[];
 
  invoke(event){
    this.quotes.push(event);
    
  }
  upVote(event){
    event.votes += 1;
    this.quotes.sort(function(a, b) {
      return b.votes - a.votes;
    });
  }
  downVote(event){
    if(event.votes > 0){
    event.votes -= 1;
    }
    else{
      event.votes = 0;
    }
 
  }
  delete(event){
    
    
  }
}
