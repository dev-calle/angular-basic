import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({providedIn: 'root'})
export class UiService {
  constructor() { }

  async onShowAlert( icon: SweetAlertIcon, title: string ) {
    return await Swal.fire({
      icon,
      title
    });
  }

}
