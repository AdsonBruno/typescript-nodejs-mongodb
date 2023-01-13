import { IGetUsersRepository } from '../../controllers/get-users/protocols';
import { User } from '../../models/user';

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: 'Adson',
        lastName: 'Bruno',
        email: 'adsonbruno2@gmail.com',
        password: '123',
      },
    ];
  }
}
