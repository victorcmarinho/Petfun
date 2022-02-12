import { Field, ObjectType } from '@nestjs/graphql';
import { uuid } from 'uuidv4';

@ObjectType()
export class User {
  @Field({ description: 'ID do usuário' })
  id: string;

  @Field({ description: 'Nome do usuário' })
  name: string;

  @Field({ description: 'E-mail do usuário' })
  email: string;

  @Field({ description: 'Senha do usuário' })
  password: string;

  constructor(name?: string, email?: string, password?: string) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
