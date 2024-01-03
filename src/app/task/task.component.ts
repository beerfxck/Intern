import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: any[] = [];
  selectedTask: any; // Variable to store the selected task

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make HTTP request to get task data
    this.http.get<any[]>('http://103.13.31.37:17444/api/tasks')
      .subscribe((data) => {
        this.tasks = data;
      });
  }

  onSelectTask(task: any): void {
    this.selectedTask = task; // Set the selected task
  }
}
