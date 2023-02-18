import { ObjectId } from 'mongodb';
import { IGetUserRepositoryById } from '../../controllers/get-users/protocols';
import { MongoClient } from '../../database/mongo';
import { User } from '../../models/user';
import { MongoUser } from '../mongo-protocols';

export class MongoGetUserByIdRepository implements IGetUserRepositoryById {
  async getUserById(id: string): Promise<User> {
    const user = await MongoClient.db
      .collection<MongoUser>('users')
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw Error('User not found');
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
