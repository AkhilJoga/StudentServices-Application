import { Component, OnInit } from '@angular/core';
import { CreateStudentServiceService } from 'src/app/create-student-service.service';
import { Students } from 'src/entity/Students';
import { EditStudentComponent } from '../edit-student/edit-student.component';


@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent implements OnInit {

  students:Students=new Students();
 

  save(){
  const objser = this.createStudentService.createStudent(this.students);
    objser.subscribe(
      (res:any)=>{
        console.log(res);
      },
      function(error){
        console.log(error);
        alert("Error in while storing");
      }
      )
      window.location.reload();
  }



  constructor(public createStudentService:CreateStudentServiceService) { }

  ngOnInit(): void {
   
  }

}
