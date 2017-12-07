import { Component, OnInit, Output, EventEmitter } from '@angular/core'; 
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Output() myEvent = new EventEmitter();
  constructor() { }
  myQuote = new Quotes()
  submitForm(){
    this.myEvent.emit(this.myQuote);
    this.myQuote= new Quotes()
  }

  ngOnInit() {
  }

}
