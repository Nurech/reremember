import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) {}

  showSuccess(message: string) {
    this.toastr.success(message, '', {
      timeOut: 4000, closeButton: true, positionClass: 'toast-top-center', progressBar: true
    });
  }

  showFailure(message: string) {
    this.toastr.error(message, '', {
      timeOut: 4000, closeButton: true, positionClass: 'toast-top-center', progressBar: true
    });
  }
}
