export class Quote {
    
    showDescription: boolean;
    constructor(public id: number,public quote: string,public Author: string,public Publisher: string,public completeDate: Date){
      this.showDescription=false;
}}
