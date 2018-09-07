import { User } from './../models/user';
import { DefaultResponse } from './default.interface';

export interface UserResponse extends DefaultResponse {
  users: User[];
}