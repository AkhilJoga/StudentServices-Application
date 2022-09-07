import { Component, OnInit } from '@angular/core';
import { CreateStudentServiceService } from 'src/app/create-student-service.service';
import { Students } from 'src/entity/Students';
@Component({
  selector: 'app-listby-group',
  templateUrl: './listby-group.component.html',
  styleUrls: ['./listby-group.component.css']
})


export class ListbyGroupComponent implements OnInit {
  studentServie:CreateStudentServiceService;
  
  students : Students[];
  groupBy : Students[]=null;
  
  groupBySection(s_class:string){
    const objer =  this.studentsServie.getbyClass(s_class) ;
    objer.subscribe(
      (response)=> {console.log();
      this.groupBy = response as Students[];
    })
  }

  constructor(public studentsServie:CreateStudentServiceService) { }

  ngOnInit(): void {
    const promise = this.studentsServie.getStudents();
    promise.subscribe(
    (response)=> {console.log();
    this.students = response as Students[];
  })

  }


}
