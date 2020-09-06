import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: 1,
        username: 'thiagosilva@mail.com',
        password: 'senhasecreta',
      },
      {
        id: 2,
        username: 'tms-@live.com',
        password: 'senhasecreta',
      },
      {
        id: 3,
        username: 'thiago@gmail.com',
        password: 'senhasecreta',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
