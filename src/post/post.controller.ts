import { Controller } from '@nestjs/common';
import { UserEntity } from '../user/user.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model: {
        type: PostEntity
    }
})
@ApiTags('Post')
@Controller('Post')
export class PostController implements CrudController<PostEntity> {
    constructor(public service: PostService) {
    }
}
