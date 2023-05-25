import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { Request } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return {
      username: 'Choi lo',
      emai: 'choilv@gmail.com',
    };
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {
      userData,
    };
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return {
      id,
    };
  }
}
