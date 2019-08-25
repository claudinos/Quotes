import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import{Quote} from '../quote'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() umuhire: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  claudineDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  votequote= 0;
  upshow(){
      this.votequote+=1;
  }
  downvote= 0;
  downshow(){
     this.downvote+=1;
      }
  constructor() { }

  ngOnInit() {
  }

}
