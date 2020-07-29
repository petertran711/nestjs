import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { GenericEntity } from '../generic/generic.entity';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'Post' })
export class PostEntity extends GenericEntity {
    @ApiProperty()
    @Column()
    title: string;

    @ApiProperty()
    @Column()
    content: string;

    @Column({ default: 0, type: 'int' })
    comments_num: number;

    @ManyToOne(
        () => UserEntity,
        (user: UserEntity) => user.posts,
    )
    @JoinColumn({ name: 'userId' })
    user: UserEntity;


}
