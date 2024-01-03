import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Task {
  id: number;
  name: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = []; // Initialize tasks with an empty array

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make HTTP request to get task data
    this.http.get<Task[]>('http://103.13.31.37:17444/api/tasks')
      .subscribe((data) => {
        this.tasks = data;
      });
  }
}