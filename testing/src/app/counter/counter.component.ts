import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  increment(number: number){
   number++
   return number
  }

  decrement(number:number){
    number--
    return number
  }

}
