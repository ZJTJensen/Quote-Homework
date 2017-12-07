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
    this.quotes.sort(function(a, b) {
      return parseFloat(a.votes) - parseFloat(b.votes);
  });
  }
  upVote(event){
    event.votes += 1;
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
