import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Address, Province } from '../';
import { Base } from "../Base";


@Entity('adm_cities')
export class City extends Base {

    @Column({ type: 'varchar' })
    name: string;

    @ManyToOne(() => Province, (province) => province.cities, { eager: true, createForeignKeyConstraints: true, nullable: false })
    @JoinColumn({ name: 'province_id' })
    province: Province;

    @OneToMany(() => Address, address => address.city)
    addresses: Address[];

}
