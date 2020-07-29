import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('timestamp', { precision: 3, default: () => 'CURRENT_TIMESTAMP(3)', onUpdate: 'CURRENT_TIMESTAMP(3)' })
    updateAt: Date;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
}
