import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  searchUser!:string
  @Output() searchUsername= new EventEmitter<any>();

  search(){
    this.searchUsername.emit(this.searchUser)
    this.searchUser=''
  }


  constructor() { }

  ngOnInit(): void {
  }

}
