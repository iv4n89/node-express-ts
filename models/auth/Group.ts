import { Column, Entity, In, JoinTable, ManyToMany } from "typeorm";
import { Permission } from '../';
import db from '../../database/db';
import { updatePermissions } from "../../util/auth/permission.util";
import { Base } from "../Base";
import { User } from "./User";

@Entity('auth_groups')
export class Group extends Base {

    @Column({ type: 'varchar', unique: true })
    name: string;

    @Column({ type: 'tinyint', default: 1 })
    is_active: number;

    @ManyToMany(type => User, (user) => user.groups)
    users: User[]

    @ManyToMany(type => Permission, permission => permission.groups, { eager: true })
    @JoinTable({ name: 'group_permissions', joinColumn: { name: 'group_id' }, inverseJoinColumn: { name: 'permission_id' } })
    permissions: Permission[]

    /**
     * Set user to group. It will be called from generic service if the many to many relation is provided
     * @param userIds 
     */
    async setusers(userIds: number[]) {
        const users = await db.getRepository(User).find({ where: { id: In(userIds) } });
        this.users = users;
        await db.getRepository(Group).save(this);
    }

    /**
     * Set permissions to group. It will be called from generic service if the many to many relation is provided
     * @param permissions 
     */
    async setpermissions(permissions: any) {
        updatePermissions(this, permissions, db.getRepository(Group));
    }

}
