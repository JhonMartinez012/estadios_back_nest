import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {
    private readonly users =[
       {
        userId: 1,
        username: 'jhon',
        password: 'tutas'
       },
       {
        userId: 2,
        username: 'leidy',
        password: 'endy'
       },
    ];

    async findOne(username: string): Promise <User | undefined>{
        return this.users.find(user => user.username === username)
    }
}
