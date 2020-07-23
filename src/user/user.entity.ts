import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';


@Entity({ name: 'User' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

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

    @Column({ type: 'varchar', length: 500 })
    salt: string;

    @ApiProperty()
    @Column({
        length: 250,
        select: false,
        name: 'password'
    })
    password: string;

    access_token?: string;

}
