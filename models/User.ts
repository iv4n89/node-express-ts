import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"

@Entity('auth_users')
export class User {

    @PrimaryGeneratedColumn({ unsigned: true })
    id: number;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    last_name: string;

    @Column({ type: 'varchar', unique: true })
    username: string;

    @Column({ type: 'varchar', unique: true })
    email: string;

    @Column({ type: 'varchar', unique: true })
    personal_email: string;

    @Column({ type: 'varchar', select: false })
    password: string;

    @Column({ type: 'varchar', nullable: true, select: false })
    password_token: string;

    @Column({ type: 'date' })
    birth_date: Date;

    @Column({
        type: 'integer',
        nullable: true
    })
    gender: number;

    @Column({ type: 'varchar', nullable: true })
    mobile_phone: string;

    @Column({ type: 'varchar', nullable: true })
    home_phone: string;

    @Column({ type: 'varchar', nullable: true })
    user_image: string;

    @Column({ type: 'varchar', nullable: true })
    bio: string;

    @Column({ type: 'tinyint', default: 1 })
    is_active: number;

    @CreateDateColumn()
    created_at: Timestamp;

    @UpdateDateColumn()
    updated_at: Timestamp;

    @DeleteDateColumn()
    deleted_at: Timestamp;
}
