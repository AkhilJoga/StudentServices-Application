import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const STD_Post = "http://localhost:8081/createStudent";
const STD_GET = "http://localhost:8081/getAllStudents";
const STD_DEL = "http://localhost:8081/deleteById/";
const STD_GRP = "http://localhost:8081/getByClass/";
const STD_EDIT = "http://localhost:8081/updateStudent/";
const STD_GET_ID = "http://localhost:8081/getById/";


@Injectable({
  providedIn: 'root'
})
export class CreateStudentServiceService {

  createStudent(student:{id:number;firstName:string;
    lastName:string;s_class:string;
    subject:string;	dob:string;})
  {
    return this.http.post(STD_Post,student);
  }

  getStudents(){
    return this.http.get(STD_GET);
  }

  getbyId(id:number){
    return this.http.get(STD_GET_ID+id);
  }
  
  getbyClass(s_class:string){
    return this.http.get(STD_GRP+s_class);
  }


  deleteStudent(id:number){
    console.log(STD_DEL+id)
    return this.http.delete(STD_DEL+id).subscribe(() => console.log("user deleted")); 
  }


  updateStudent(id:number,student:{firstName:string;
    lastName:string;s_class:string;
    subject:string;	dob:string;})
  {
    return this.http.post(STD_EDIT+id,student);
  }

  constructor(public http:HttpClient) { }
}
