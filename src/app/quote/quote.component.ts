import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  claudine: Quote[] = [
    new Quote(1,'“Life is the flower for which love is the honey.”','Eleanor Roosevelt','carine'),
    new Quote(2,'“Great minds discuss ideas; average minds discuss events; small minds discuss people.”','Eleanor Roosevelt','Abby'),
    new Quote(3,'“It is hard to fail, but it is worse never to have tried to succeed.”','Theodore Roosevelt','Taylor'),
    new Quote(4,'“To say ‘I love you’ one must first be able to say the ‘I’.”','Ayn Rand','Victory'),
    new Quote(5,'“Those who dare to fail miserably can achieve greatly.”','Victor Hugo','Mike'),

    // {id:2,quote:'',Author:'-John F. Kennedy', Name:'Taylor'},
    // {id:3,quote:'“It is hard to fail, but it is worse never to have tried to succeed.”',Author:'-Theodore Roosevelt', Name:'Abby'},
    // {id:4,quote:'“To say ‘I love you’ one must first be able to say the ‘I’.”',Author:'', Name:'Andy'},
    // {id:5,quote:'“Life is the flower for which love is the honey.”',Author:'Victor Hugo', Name:'Victor'},

  ]
  Details(index){
    this.claudine[index].showDescription = !this.claudine[index].showDescription;
  }
  constructor() { }

  ngOnInit() {
  }

}
