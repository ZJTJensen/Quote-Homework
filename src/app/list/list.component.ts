import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() up = new EventEmitter();
  @Output() down= new EventEmitter();
  @Output() delete = new EventEmitter();
  @Input() myQuotes: Quotes[];
  constructor() { }
  upTrigger() {
    this.up.emit()
  }

  downTrigger() {
    this.down.emit()
  }
  deleteTrigger() {
    this.delete.emit()
  }

  ngOnInit() {
  }

}
