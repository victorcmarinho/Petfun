import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field({ description: 'Nome do usuário' })
  name: string;

  @Field({ description: 'E-mail do usuário' })
  email: string;

  @Field({ description: 'Senha do usuário' })
  password: string;
}
