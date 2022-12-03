import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('5 points for reading home page!', '',{
      timeOut: 4000, closeButton: true, positionClass: 'toast-top-center', progressBar: true
    });
  }
}
