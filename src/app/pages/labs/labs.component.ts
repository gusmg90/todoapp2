import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import  { signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {



  constructor() {
    this.colorCtl.valueChanges.subscribe(value => {
      console.log(value);
    })
  }
  tasks = signal(["uno","dos","tres"])
  age = signal(30);
  name = signal("gustavo");
  img ="https://picsum.photos/200";

personobject = signal({
  name: "gustavo",
  age: 30,
  img: "https://picsum.photos/200"
});
  
  onClickHandler() {
    console.log('Hello, todoapp2');
    alert('Hello, todoapp2');
  }

  estado = true;
  getEstado(){
    return this.estado;
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    console.log(input.value);

  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
    console.log(input.value);
  }





  changeName(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.personobject.update(prevState =>{
      return{
        ...prevState,
        name: newValue
      }
    })
    console.log(input.value);
  }

 colorCtl=new FormControl();

}
