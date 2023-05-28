import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
  private fakeUser: CreateUserType[] = [
    {
      username: 'Choi lo',
      email: 'choilv@gmail.com',
    },
    {
      username: 'Sobi',
      email: 'sobi@gmail.com',
    },
  ];

  fetchUsers() {
    return this.fakeUser;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUser.push(userDetails);
    return;
  }

  fetchUserById(id: number) {
    // return { id, ...this.fakeUser[0] };
    return null;
  }
}
