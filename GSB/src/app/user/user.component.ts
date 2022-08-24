import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserModel } from 'src/models/user.dto';
import { UserService } from 'src/services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm = this.formBuilder.group({
    name: '',
    surname: '',
    email: '',
    address: ''
  });

  userFormData= [new UserModel()];


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.refreshTable()
  }

  onSubmit(): void {
    // Process checkout data from form
    console.warn('Your user has been submitted', this.userForm.value);
    this.userService.addUser(this.userForm.value).subscribe(response=>{
      this.refreshTable();
    });
    
    this.userForm.reset();
  }

  refreshTable(){
    console.log("Refreshing table")
    this.userService.getUsers().subscribe(response=>{
      this.userFormData = response;
    });
  }

  

}
