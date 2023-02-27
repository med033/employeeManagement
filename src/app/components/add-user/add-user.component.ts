import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  msgError = false;
  addUserForm!: FormGroup;
  employee: any;
  numberValue: number = 0;
  i = 0;
  constructor() {}
  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      years: new FormControl('', [Validators.required]),
    });
  }
  get name() {
    return this.addUserForm.get('name')!;
  }
  get surname() {
    return this.addUserForm.get('surname')!;
  }
  get years() {
    return this.addUserForm.get('years')!;
  }

  addUser(user: any) {
    user.years = this.numberValue;
    if (user.name != '' && user.surname != '') {
      let idUser = JSON.parse(localStorage.getItem('idUser') || '1');
      user.id = idUser;
      let users = JSON.parse(localStorage.getItem('users') || '[]');
      users.unshift(user);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('idUser', idUser + 1);
    } else {
      this.msgError = true;
    }
  }

  plus() {
    this.i++;
    this.numberValue = this.i;
  }
  minus() {
    this.i--;
    this.numberValue = this.i;
  }
  onCardClick() {
    const sidebar = document.getElementById('sidebar');
    console.log(sidebar);
    if (sidebar) {
      sidebar.classList.remove('open');
    }
  }
}
