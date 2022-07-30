import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"
import { Address, Country, Province } from "../";
import { Base } from "../Base";

@Entity('adm_communities')
export class Community extends Base{

    @Column({ type: 'varchar' })
    name: string;

    @ManyToOne(() => Country, (country) => country.communities, { eager: true, createForeignKeyConstraints: true, nullable: false })
    @JoinColumn({ name: 'country_id' })
    country: Country;

    @OneToMany(() => Province, (province) => province.community)
    provinces: Province[];

    @OneToMany(() => Address, address => address.community)
    addresses: Address[];

}
