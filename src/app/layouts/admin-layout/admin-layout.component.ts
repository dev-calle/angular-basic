import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  loading = false;

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 1000);

    }, 250);



  }

}
