import { Component, OnInit } from '@angular/core';
import { CreateStudentServiceService } from 'src/app/create-student-service.service';
import { Students } from 'src/entity/Students';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  id:string;
  id2:number;


  students:Students=new Students();

  save(){
  const objser = this.createStudentService.updateStudent(this.id2,this.students)
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

  constructor(public createStudentService:CreateStudentServiceService,
    private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.id2 = parseInt(this.id);
    const promise =  this.createStudentService.getbyId(this.id2)
    promise.subscribe(
    (response)=> {console.log();
    this.students = response as Students
  })

  }


}
