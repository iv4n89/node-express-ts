import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"
import { Address, Community } from "../";
import { Base } from "../Base";

@Entity('adm_countries')
export class Country extends Base {

    @Column({ type: 'varchar' })
    name: string;

    @OneToMany(() => Community, (community) => community.country, { cascade: ['insert', 'update'] })
    communities: Community[];

    @OneToMany(() => Address, (address) => address.country, { cascade: ['insert', 'update'] })
    addresses: Address[];

}
