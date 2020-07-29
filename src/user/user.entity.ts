import { Column, Entity, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { GenericEntity } from 'src/generic/generic.entity';
import { Roles } from '../helper/constant';
import { PostEntity } from '../post/post.entity';


@Entity({ name: 'User' })
export class UserEntity extends GenericEntity {
    @ApiProperty()
    @IsOptional()
    @Column({
        length: 30, nullable: true
    })
    firstName: string;

    @ApiProperty()
    @Column({
        length: 50, nullable: true
    })
    lastName: string;

    @ApiProperty()
    @Column({ length: 50, unique: true, nullable: false })
    @IsString()
    email: string;

    @ApiProperty()
    @Column({
        length: 250,
        select: false,
        name: 'password'
    })
    password: string;

    @ApiProperty()
    @Column({ type: 'simple-array' })
    role: Roles [];

    @Column()
    access_token?: string;

    @OneToMany(
        () => PostEntity,
        (post: PostEntity) => post.user
    )
    posts: PostEntity[];

}
