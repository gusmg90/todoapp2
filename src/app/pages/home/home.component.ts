import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/tasks.model';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
tasksarr= signal(["uno","dos","tres"]);

tasks = signal<Task[]>([{
id: Date.now(),
title: "crear proyecto",
completed: false
},
{
  id: Date.now(),
  title: "crear tarea",
  completed: false
  },

  {
    id: Date.now(),
    title: "ir al super",
    completed: false
    }

]);

changeHandler(event: Event){
  const input = event.target as HTMLInputElement;
  const newTask = input.value;
      this.tasks.update((tasks) => [...tasks, newTask]);
      input.value = "";
      console.log(newTask);
  }

  addTask(title: string){
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    }
  }

deleteTask(index: number){
this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
}
}
