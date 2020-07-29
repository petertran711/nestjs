import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { PostEntity } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostService extends TypeOrmCrudService <PostEntity> {
    constructor(
        @InjectRepository(PostEntity)
        private props: Repository<PostEntity>) {
        super(props);
    }

}
