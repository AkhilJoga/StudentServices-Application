import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CreateStudentsComponent } from './components/create-students/create-students.component';
import { AppComponent } from './app.component';
import { ListbyGroupComponent } from './components/listby-group/listby-group.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
const routes =[
    {path:"home",component:AppComponent},
    {path:"about",component:AboutusComponent},
    {path:"createStudent",component:CreateStudentsComponent},
    {path:"listByGroup",component:ListbyGroupComponent},
    {path:"editStudent/:id",component:EditStudentComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }