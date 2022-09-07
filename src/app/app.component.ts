import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Students } from 'src/entity/Students';
import { CreateStudentServiceService } from './create-student-service.service';
import { Router } from '@angular/router';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'students';
  show = true;
  
  students : Students[];
  editStudent : EditStudentComponent
  deleteStudent(id:number){
    const objer =  this.studentsServie.deleteStudent(id) ;
    window.location.reload();
    console.log(id);
  }


  constructor(public studentsServie:CreateStudentServiceService,public router:Router) { }

  ngOnInit(): void {
    const promise = this.studentsServie.getStudents();
    promise.subscribe(
    (response)=> {console.log();
    this.students = response as Students[];
  })
  }

}
