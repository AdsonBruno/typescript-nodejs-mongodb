import express from 'express';
import SwaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';
import { config } from 'dotenv';
import {
  GetUsersController,
  GetUserByIdController,
} from './controllers/get-users/get-users';
import { MongoGetUsersRepository } from './repositories/get-users/mongo-get-users';
import { MongoClient } from './database/mongo';
import { MongoCreateUserRepository } from './repositories/create-user/mongo-create-user';
import { CreateUserController } from './controllers/create-user/create-user';
import { MongoUpdateUserRepository } from './repositories/update-user/mongo-update-users';
import { UpdateUserController } from './controllers/update-user/update-user';
import { MongoDeleteUserRepository } from './repositories/delete-user/mongo-delete-user';
import { DeleteUserController } from './controllers/delete-user/delete-user';
import { MongoGetUserByIdRepository } from './repositories/get-users/mongo-get-user-by-id';

const main = async () => {
  config();

  const app = express();

  app.use(express.json());

  await MongoClient.connect();

  app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));

  app.get('/users', async (req, res) => {
    const mongoGetUsersRepository = new MongoGetUsersRepository();

    const getUsersController = new GetUsersController(mongoGetUsersRepository);

    const { body, statusCode } = await getUsersController.handle();

    res.status(statusCode).send(body);
  });

  app.get('/users/:id', async (req, res) => {
    const mongoGetUserByIdRepository = new MongoGetUserByIdRepository();

    const getUserByIdController = new GetUserByIdController(
      mongoGetUserByIdRepository
    );
    const { body, statusCode } = await getUserByIdController.handle(req);

    res.status(statusCode).send(body);
  });

  app.post('/users', async (req, res) => {
    const mongoCreateUserRepository = new MongoCreateUserRepository();

    const createUserController = new CreateUserController(
      mongoCreateUserRepository
    );

    const { body, statusCode } = await createUserController.handle({
      body: req.body,
    });

    res.status(statusCode).send(body);
  });

  app.patch('/users/:id', async (req, res) => {
    const mongoUpdateUsersRepository = new MongoUpdateUserRepository();

    const updateUserController = new UpdateUserController(
      mongoUpdateUsersRepository
    );

    const { body, statusCode } = await updateUserController.handle({
      body: req.body,
      params: req.params,
    });

    res.status(statusCode).send(body);
  });

  app.delete('/users/:id', async (req, res) => {
    const mongoDeleteUserRepository = new MongoDeleteUserRepository();

    const deleteUserController = new DeleteUserController(
      mongoDeleteUserRepository
    );

    const { body, statusCode } = await deleteUserController.handle({
      params: req.params,
    });

    res.status(statusCode).send(body);
  });
  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`servidor rodando na porta ${port}!`));
};

main();
