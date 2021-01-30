import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

 //peticion al backend

 URL_API = 'http://localhost:4000/api/employees';

//almacena datos, objeto vacio que vamos a ir llenando cojn lo que escribimos en el formulario
  selectedEmployee: Employee = {
    name: '',
    office: '',
    position: '',
    salary: 0,

  }; 

  employees: Employee[];

  constructor(private http: HttpClient) {}

  //Obtener un arreglo de empleado con .get<Employee[]>
  getEmployees(){
    return this.http.get<Employee[]>(this.URL_API);
  }

  createEmployee(employee: Employee){
    return this.http.post(this.URL_API, employee);
  }

  putEmployee(employee: Employee){
    return this.http.put(`${this.URL_API}/${employee._id}`, employee);
  }


  deleteEmployee(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  
}


