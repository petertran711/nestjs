import { Crud, CrudController } from '@nestjsx/crud';
import { UserEntity } from './user.entity';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model: {
        type: UserEntity
    }
})
@ApiTags('User')
@Controller('User')
export class UserController implements CrudController<UserEntity> {
    constructor(public service: UserService) {
    }
}
