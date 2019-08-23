export class Quote {
    // id:number
    // quote:string;
    // Author:string;
    // Name:string;
    showDescription: boolean;
    constructor(public id: number,public quote: string,public Name: string,public Author: string){
      this.showDescription=false;
}}
