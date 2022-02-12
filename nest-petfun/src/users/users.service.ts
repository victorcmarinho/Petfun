import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private _data: User[] = [];

  create({ name, email, password }: CreateUserDto): User {
    const user = new User(name, email, password);
    this._data.push(new User(name, email, password));
    return user;
  }

  findAll(): User[] {
    return this._data;
  }

  findOne(id: string): User | null {
    return this._data.find((user) => user.id === id) ?? null;
  }

  update(id: string, { name, email, password }: UpdateUserDto): void {
    const index = this._data.findIndex((user) => user.id === id);
    if (index !== -1) {
      this._data[index] = { ...this._data[index], name, email, password };
    }
  }

  remove(id: string): void {
    const index = this._data.findIndex((user) => user.id === id);
    if (index !== -1) {
      this._data.slice(index, 1);
    }
  }
}
