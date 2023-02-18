import { User } from '../../models/user';
import { badRequest, notFound, ok, serverError } from '../helpers';
import { HttpRequest, HttpResponse, IController } from '../protocols';
import { IGetUserRepositoryById, IGetUsersRepository } from './protocols';

export class GetUsersController implements IController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle(): Promise<HttpResponse<User[] | string>> {
    try {
      // Validar requisições
      // direcionar chamada para o repository
      const users = await this.getUsersRepository.getUsers();
      return ok<User[]>(users);
    } catch (error) {
      return serverError();
    }
  }
}

export class GetUserByIdController implements IController {
  constructor(private readonly getUserById: IGetUserRepositoryById) {}

  async handle(
    httpRequest: HttpRequest<User>
  ): Promise<HttpResponse<User | string>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return badRequest('Missing user id!');
      }

      const user = await this.getUserById.getUserById(id);

      if (!user) {
        return badRequest('User not found!');
      }

      return ok<User>(user);
    } catch (error) {
      // return serverError();
      return notFound('User not found');
    }
  }
}
