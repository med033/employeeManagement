import { Component , Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import  usersSaved  from '../../../assets/users.json';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent {
user:any;
userSide:any={};
id:any;
users:any=[];
cancelId:any;
sideForm!:FormGroup;
constructor(){
}
ngOnInit(){

this.users =JSON.parse(localStorage.getItem("users") || "[]");
if (this.users.length=="0") {

  localStorage.setItem("users",JSON.stringify(usersSaved))
}

}
numberValue: number = 0;
i = 0;
plus() {
  this.i++;
  this.numberValue = this.i;
}
minus() {
  this.i--;
  this.numberValue = this.i;
}

  openSidebar(id:any): void {
    this.cancelId=id;
    for (let i = 0; i < this.users.length; i++) {
if (this.users[i].id==id) {
  this.userSide=this.users[i]
} 
    }

    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.classList.add("open");
    }
  }
  
closeSidebar(): void {
  
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.classList.remove("open");
    }
  }
  update(e:any){
    this.users=e;
    }

    load(){
    window.location.reload();
    }

    cancel() {
      let users =JSON.parse(localStorage.getItem("users") || "[]");
for (let i = 0; i < this.users.length; i++) {
if (users[i].id==this.cancelId) {
  this.userSide.name=users[i].name;
  this.userSide.surname=users[i].surname;
  this.userSide.years=users[i].years;
}  
}
    }



    save(){
    for (let i = 0; i < this.users.length; i++) {
if (this.users[i].id==this.userSide.id) {
  if(this.users[i]!=this.userSide){
    this.users[i]=this.userSide
  }
}      
    }
    localStorage.setItem("users",JSON.stringify(this.users))

    }

   
}
