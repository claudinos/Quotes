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


  ]
  Details(index){
    this.claudine[index].showDescription = !this.claudine[index].showDescription;
  }
  claudineDelete(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.claudine[index].quote}?`)

      if (toDelete){
        this.claudine.splice(index,1)
      }
    }
  }
  // addNewQuotel(claudine){
  //   let goalLength = this.claudine.length;
  //   claudine.id = quote.Length+1;
  //   claudine.completeDate = new Date(claudine.completeDate)
  //   this.claudine.push(claudine)
  // }
  constructor() { }

  ngOnInit() {
  }

}
