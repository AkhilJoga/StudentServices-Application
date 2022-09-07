import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { CreateStudentsComponent } from './components/create-students/create-students.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { ListbyGroupComponent } from './components/listby-group/listby-group.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { EllipsesPipe } from './ellipses.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateStudentsComponent,
    AboutusComponent,
    ListbyGroupComponent,
    EditStudentComponent,
    EllipsesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
