import { User } from '../../models/user';

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>;
}

export interface IGetUserRepositoryById {
  getUserById(id: string): Promise<User | null>;
}
