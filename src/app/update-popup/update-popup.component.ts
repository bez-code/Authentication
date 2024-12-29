import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../service/Auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrls: ['./update-popup.component.scss']
})
export class UpdatePopupComponent implements OnInit {

  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService,
    private dialog: MatDialogRef<UpdatePopupComponent>
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
        this.registrationForm.setValue({
          id: this.editData.id, name: this.editData.name,
          email: this.editData.email, password: this.editData.password, gender: this.editData.gender,
          role: this.editData.role, isActive: this.editData.isActive
        })
      })
    }
  }
  roleList: any;

  registrationForm = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    password: this.builder.control(''),
    email: this.builder.control(''),
    gender: this.builder.control('male'),
    role: this.builder.control('', Validators.required),
    isActive: this.builder.control(false),
  });

  updateUser() {
    if (this.registrationForm.valid) {
      this.service.UpdateUser(this.registrationForm.value.id, this.registrationForm.value).subscribe(res => {
        this.toastr.success('Updated Succesfully!');
        this.dialog.close();
      })
    } else {
      this.toastr.warning('Please Select Role')
    }
  }


}
