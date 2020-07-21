import { Controller } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { Crud } from '@nestjsx/crud';

@Crud({
    model: {
        type: UserEntity
    }
})

@Controller('user')
export class UserController {
}
