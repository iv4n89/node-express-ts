import { Column, Entity, In, JoinColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Group, User } from '../';
import db from '../../database/db';
import { Base } from '../Base';

@Entity('auth_permissions')
export class Permission extends Base {

    @Column({ type: 'varchar', unique: true })
    name: string;

    @ManyToOne(type => Permission, permission => permission.children)
    @JoinColumn({ name: 'parent_id' })
    parent: Permission;

    @OneToMany(type => Permission, permission => permission.parent)
    @JoinColumn({ name: 'parent_id' })
    children: Permission[];

    @ManyToMany(type => Group, group => group.permissions)
    groups: Group[];

    @ManyToMany(type => User, user => user.permissions)
    users: User[]

    /**
     * Set group to permission. It will be called from generic service if the many to many relation is provided
     * @param groupIds 
     */
    async setgroups(groupIds: number[]) {
        const groups = await db.getRepository(Group).find({ where: { id: In(groupIds) } });
        this.groups = groups;
        await db.getRepository(Permission).save(this);
    }

    /**
     * Set user to permission. It will be called from generic service if the many to many relation is provided
     * @param userIds 
     */
    async setusers(userIds: number[]) {
        const users = await db.getRepository(User).find({ where: { id: In(userIds) } });
        this.users = users;
        await db.getRepository(Permission).save(this);
    }

}
