import {Injectable} from '@angular/core';

@Injectable()
export class DefaultService {

  protected URL_FAKE: string = 'https://reqres.in/api/';
  protected URL_FORUM: string = 'http://mapforum.in4.com.br/';

  constructor() {
  }

}