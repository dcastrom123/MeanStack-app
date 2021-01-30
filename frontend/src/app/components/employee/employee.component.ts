import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService],
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) {}

  //llama a la funcion
  ngOnInit(): void {
    /*this.employeeService.getEmployees().subscribe(
      res => console.log(res),
      err=> console.error(err)
    )*/
    this.getEmployees();
  }


  resetForm(form: NgForm){
    form.reset();
  }



  //se asigna un arreglo de empleados
  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      res => {
        this.employeeService.employees = res;
      },
      err => console.error(err)

    );
  }

  //Recibe un ngForm con lo que trae el formulario y que agrege a la tabla esto mediante post
  addEmployee(form: NgForm) {
    if(form.value._id){
      this.employeeService.putEmployee(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      );
    }else{
      this.employeeService.createEmployee(form.value).subscribe(
        res => {
          this.getEmployees();
          form.reset();
        },
        err => console.error(err)
      );
    }
  }


  //llamado desde el click de eliminar
  deleteEmployee(_id: string) {
    if (confirm("Seguro que quieres eliminar?")) {
      this.employeeService.deleteEmployee(_id).subscribe(
        (res) => {
          this.getEmployees();
        },
        // this.resetForm(form);
        (err) => console.error(err)
      );
    }
  }

  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;
  }


}

