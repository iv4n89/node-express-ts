import { Column, Entity, ManyToMany } from "typeorm"
import { Base } from "../Base";
import { User } from './User';

@Entity('auth_languages')
export class Language extends Base {

    @Column({ type: 'varchar' })
    name: string;

    @ManyToMany(type => User, user => user.languages, { createForeignKeyConstraints: true })
    users: User[]

    @Column({ type: 'tinyint' })
    is_active: number;
}
