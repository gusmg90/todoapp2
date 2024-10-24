import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import  { signal } from '@angular/core';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
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

}
