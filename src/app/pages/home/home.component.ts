import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/tasks.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

newTaskCtl= new FormControl('',{
  nonNullable: true,
  validators: [
  Validators.required,
  Validators.minLength(3),
  ]
  });

changeHandler(event: Event){
  const input = event.target as HTMLInputElement;
  const newTask = input.value;
      this.addTask(newTask);
      input.value = "";
      console.log(newTask);
  }

  addTask(title: string){
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
    console.log(newTask);
  }

deleteTask(index: number){
this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
}

updateTask(index: number){
    this.tasks.update((tasks)=> {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            completed: !task.completed
          }
        } 
        return task;
      })

    })
  }
}
 