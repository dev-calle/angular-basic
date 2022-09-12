import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { UserService } from '../../../services/user.service';
import { IUser } from '../../../interfaces/user.interface';
import { UiService } from '../../../services/ui.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  getter$?  : Subscription;
  create$?  : Subscription;
  update$?  : Subscription;

  users     : IUser[] = [];

  loading   = false;
  loadData  = false;

  private _id = '';

  frmUser   : FormGroup = new FormGroup({});

  constructor(
    private _usersvc: UserService,
    private _uisvc: UiService,
    private _frmbuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.onGetUser();
    this.onBuildFrm();
  }

  onBuildFrm() {

    this.frmUser = this._frmbuilder.group({
      email: [ '', [ Validators.required, Validators.minLength(3) ] ],
      phone: [ '', [ Validators.required ]]
    });

  }

  touched( field: string ) {
    return this.frmUser.get( field )?.touched;
  }

  get controls() {
    return this.frmUser.controls;
  }

  get invalid() {
    return this.frmUser.invalid;
  }

  get values(): { email: string; phone: string; } {
    return this.frmUser.value;
  }

  onLoadData( user: IUser ) {

    this.frmUser.get('email')?.setValue( user.email );
    this.frmUser.get('phone')?.setValue( user.phone );

    this._id = user.id;
    this.loadData = true;

    document.getElementById('btnShowUserModal')?.click();

  }

  onGetUser(  ) {

    this.getter$ = this._usersvc.getAll( 1, 10 )
    // .subscribe( (value) => {

    //   this.users = value;

    //   this.getter$?.unsubscribe();
    // });
    .subscribe( {

      next: ( value: any ) => {
        this.users = value;
      },
      error: (e) => {

        this._uisvc.onShowAlert( 'error', 'Bad request...' );
        this.getter$?.unsubscribe();

      },
      complete: () => {

        console.log('complete================');
        this.getter$?.unsubscribe();
      }

    } );

  }

  onReset() {
    this.frmUser.reset();
    document.getElementById('btnCloseUserModal')?.click();
    this.loadData = false;
  }

  onSubmit() {

    if( this.invalid )
      throw new Error('Formulario inválido');

    const body = this.values;


    if( !this.loadData ) {

      this.create$ = this._usersvc.create( body )
      .subscribe( {

        next: (response) => {
          console.log('response ====', response);

          this.users.push( {...response} );

          this.onReset();
          // this.onGetUser();

          this._uisvc.onShowAlert('success', 'Usuario creado exitosamente');

          this.create$?.unsubscribe();
        },
        error: (e) => {

        },
        complete: () => {
          this.create$?.unsubscribe();

        }

      } );
    } else {

      this.update$ = this._usersvc.update( this._id,  body )
      .subscribe( {

        next: (response) => {
          console.log('response update ====', response);

          this.onReset();

          this.onGetUser();

          this._uisvc.onShowAlert('success', 'Usuario actualizado exitosamente');

          this.create$?.unsubscribe();
        },
        error: (e) => {

        },
        complete: () => {
          this.create$?.unsubscribe();

        }

      } );

    }

  }

  ngOnDestroy(): void {
    this.getter$?.unsubscribe();
  }

}
