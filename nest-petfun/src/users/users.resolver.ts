import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(
    @Args('createUser', { type: () => CreateUserDto })
    createUser: CreateUserDto,
  ) {
    return this.usersService.create(createUser);
  }

  @Query(() => [User])
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { nullable: true })
  findOne(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUsers(
    @Args('updateUser', { type: () => UpdateUserDto })
    updateUsers: UpdateUserDto,
  ) {
    return this.usersService.update(updateUsers.id, updateUsers);
  }

  @Mutation(() => User)
  removeUsers(@Args('id') id: string) {
    return this.usersService.remove(id);
  }
}
