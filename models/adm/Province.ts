import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"
import { Address, City, Community } from "../";
import { Base } from "../Base";

@Entity('adm_provinces')
export class Province extends Base {

    @Column({ type: 'varchar' })
    name: string;

    @ManyToOne(() => Community, (community) => community.provinces, { eager: true, createForeignKeyConstraints: true, nullable: false })
    @JoinColumn({ name: 'community_id' })
    community: Community;

    @OneToMany(() => City, (city) => city.province)
    cities: City;

    @OneToMany(() => Address, address => address.province)
    addresses: Address[];

}
