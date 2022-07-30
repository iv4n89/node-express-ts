import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Base } from "../Base";
import { Position } from "./Position";
import { User } from "./User";

@Entity('auth_job_areas')
export class JobArea extends Base {

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'tinyint' })
    is_active: number;

    @OneToMany(type => User, user => user.job_area, { createForeignKeyConstraints: true })
    users: User[];

    @OneToMany(type => Position, position => position.job_area, { createForeignKeyConstraints: true })
    positions: Position[];

}
