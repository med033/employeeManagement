import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  @Input() childUser: any;
  @Output() newUsers = new EventEmitter<any>();
  i: any;
  ngOnInit() {
    this.i = this.childUser.years;
  }

  plus() {
    this.i++;
    this.childUser.years = this.i;
  }
  minus() {
    this.i--;
    this.childUser.years = this.i;
  }
  delete(id: any) {
    let allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    let pos;
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].id == id) {
        pos = i;
      }
    }
    allUsers.splice(pos, 1);
    localStorage.setItem('users', JSON.stringify(allUsers));
    this.newUsers.emit(allUsers);
  }
}
