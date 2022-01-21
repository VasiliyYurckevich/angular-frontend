import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
// import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    
      this.employees = [{"id":2,"firstName":"2342","lastName":"234","emailId":"2342"},{"id":29,"firstName":"Admin","lastName":"admin","emailId":"admin@gmail.cm"},{"id":1324,"firstName":"1234","lastName":"1234","emailId":"1234"}]
   
  }
}
