import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URI } from '../utils';
import { IUser } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor( private _http: HttpClient ) { }

  getAll( page: number, limit: number ) {
    return this._http.get<IUser[]>( URI + `/user?page=${page}&limit=${limit}` );
  }

  create( body: any ) {
    return this._http.post<IUser>( URI + '/user', body );
  }

  update( id: string, body: any ) {
    return this._http.patch( URI + `/user/${id}`, body )
  }

}
