import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor() { }

  ngOnInit(): void {
     this.employees = [{"id":1,
     "firstName":"sadf",
     "lastName":"asdf",
     "emailId":"rosario.zer021@gmail.com"},
     {"id":2,
     "firstName":"asdf",
     "lastName":"tre",
     "emailId":"dafdf@gmail.com"}];
  }

}
