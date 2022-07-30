import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Base } from "../Base";
import { JobArea } from "./JobArea";
import { User } from "./User";

@Entity()
export class Position extends Base {
  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "tinyint" })
  is_active: number;

  @ManyToOne((type) => JobArea, (jobArea) => jobArea.positions, {
    createForeignKeyConstraints: true,
  })
  @JoinColumn({ name: "job_area_id" })
  job_area: JobArea;

  @OneToMany((type) => User, (user) => user.position, {
    createForeignKeyConstraints: true,
  })
  users: User[];
}
