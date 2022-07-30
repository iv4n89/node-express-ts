import bcrypt from 'bcrypt';
import {
  BeforeInsert,
  BeforeUpdate,
  Column, Entity,
  In,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany
} from "typeorm";
import { Address, Group } from "../";
import db from '../../database/db';
import { updatePermissions } from "../../util/auth/permission.util";
import { Base } from "../Base";
import { JobArea } from "./JobArea";
import { Language } from './Language';
import { Permission } from "./Permission";
import { Position } from "./Position";

@Entity("auth_users")
export class User extends Base {
  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  last_name: string;

  @Column({ type: "varchar", unique: true })
  username: string;

  @Column({ type: "varchar", unique: true })
  email: string;

  @Column({ type: "varchar", unique: true })
  personal_email: string;

  @Column({ type: "varchar", select: false, })
  password: string;

  @Column({ type: "varchar", nullable: true, select: false })
  password_token: string;

  @Column({ type: "date" })
  birth_date: Date;

  @Column({ type: "integer", nullable: true })
  gender: number;

  @Column({ type: "varchar", nullable: true })
  mobile_phone: string;

  @Column({ type: "varchar", nullable: true })
  home_phone: string;

  @Column({ type: "varchar", nullable: true })
  user_image: string;

  @Column({ type: "varchar", nullable: true })
  bio: string;

  @Column({ type: "tinyint", default: 1 })
  is_active: number;

  @OneToMany((type) => Address, (address) => address.user)
  addresses: Address[];

  @ManyToMany((type) => Group, (group) => group.users)
  @JoinTable({
    name: "group_users",
    joinColumn: { name: "user_id" },
    inverseJoinColumn: { name: "group_id" },
  })
  groups: Group[];

  @ManyToMany((type) => Permission, (permission) => permission.users)
  @JoinTable({
    name: "user_permissions",
    joinColumn: { name: "user_id" },
    inverseJoinColumn: { name: "permission_id" },
  })
  permissions: Permission[];

  @ManyToOne((type) => JobArea, (jobArea) => jobArea.users, {
    createForeignKeyConstraints: true,
  })
  @JoinColumn({ name: "job_area_id" })
  job_area: JobArea;

  @ManyToOne((type) => Position, (position) => position.users, {
    createForeignKeyConstraints: true,
  })
  @JoinColumn({ name: "position_id" })
  position: Position;

  @ManyToMany(type => Language, language => language.users, { createForeignKeyConstraints: true })
  @JoinTable({ name: 'user_languages', joinColumn: { name: 'user_id' }, inverseJoinColumn: { name: 'language_id' } })
  languages: Language[];

  /**
   * Set groups to user. It will be called from generic service if the many to many relation is provided
   * @param groupIds 
   */
  async setgroups(groupIds: number[]) {
    const groups = await db.getRepository(Group).find({ where: { id: In(groupIds) } });
    this.groups = groups;
    await db.getRepository(User).save(this);
  }

  /**
   * Set permissions to user. It will be called from generic service if the many to many relation is provided
   * @param permissions 
   */
  async setpermissions(permissions: any) {
    await updatePermissions(this, permissions, db.getRepository(User));
  }

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    if (this.password) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
    }
  }
}
