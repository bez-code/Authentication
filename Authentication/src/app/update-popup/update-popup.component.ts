import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../service/Auth.service';
@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrls: ['./update-popup.component.scss']
})
export class UpdatePopupComponent implements OnInit {

  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    @inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  editData: any;
  ngOnInit(): void {
    this.service.getAllRole().subscribe(res => {
      this.roleList = res;
    })
    if (this.data.usercode != null && this.data.usercode != '') {
      this.service.getByCode(this.data.usercode).subscribe(res => {
        this.editData = res;
        this.registrationForm.setValue(id:this.editData.id,name:this.editData.name,
          email:this.editData.email, password:this.editData.password, gender: this.editData.gender,
          role: this.editData.role, isActive: this.editData.isActive )
      })
    }
  }
  roleList: any;

  registrationForm = this.builder.group({
    role: this.builder.control('', Validators.required),
    isActive: this.builder.control(false),
  });

  updateUser() {

  }


}
