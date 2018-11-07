import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  add(x,y){
    return x+ y
  }

  subtract(x,y){
    return x-y
  }

  multiply(x,y,z){
    return x * y * z
  }

  divide(x,y){
    return x / y
  }

  removeLastItemInArray(numbers){
    numbers.pop()
    return numbers
  }

  removeSlashes(path){
    let name = path.split('/')
    return name[2]
  }

  removeItemFromArray(vegetables){
    vegetables.splice(2,1)
    return vegetables 
  }
  
  addItemsToArray(vegetables){
    vegetables.splice(2,0,'cucumber','carrot')
    return vegetables 
  }

  add2Messages(m1,m2){
    let m3 = m1.concat(m2)
    return m3
  }

  convertArrayToString(fruits){
    let result = fruits.join(",")
    return result
  }


}
