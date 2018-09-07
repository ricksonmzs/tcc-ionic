import { DefaultResponse } from './../interfaces/default.interface';
import { DefaultService } from './default.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';

/*
  Generated class for the ForumServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ForumServiceProvider extends DefaultService{

  constructor(public http: HttpClient) {
      super();
  }

  public addCategoria (data:any){
      return this.http.post<Categoria>(this.URL_FORUM + 'categoria/', data);
  }

  public categorias(){
      return this.http.get<Categoria[]>(this.URL_FORUM + 'categoria/');
  }

}
