import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"
import { City, Community, Country, Province, User } from "../";
import { Base } from "../Base";

@Entity('auth_addresses')
export class Address extends Base{

    @ManyToOne(() => Country, (country) => country.addresses, { nullable: true, eager: true, createForeignKeyConstraints: true, cascade: ['insert', 'update'] })
    @JoinColumn({ name: 'country_id' })
    country: Country;

    @ManyToOne(() => Community, (community) => community.addresses, { nullable: true, eager: true, createForeignKeyConstraints: true, cascade: ['insert', 'update'] })
    @JoinColumn({ name: 'community_id' })
    community: Community;

    @ManyToOne(() => Province, province => province.addresses, { nullable: true, eager: true, createForeignKeyConstraints: true, cascade: ['insert', 'update'] })
    @JoinColumn({ name: 'province_id' })
    province: Province;

    @ManyToOne(() => City, city => city.addresses, { nullable: true, eager: true, createForeignKeyConstraints: true, cascade: ['insert', 'update'] })
    @JoinColumn({ name: 'city_id' })
    city: City;

    @Column({ type: 'varchar' })
    street_name: string;

    @Column({ type: 'varchar' })
    street_number: string;

    @Column({ type: 'integer' })
    floor: number;

    @Column({ type: 'varchar' })
    door: string;

    @Column({ type: 'varchar' })
    zip_code: string;

    @ManyToOne(() => User, user => user.addresses, { nullable: true, eager: false, createForeignKeyConstraints: true, cascade: ['insert', 'update'] })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ type: 'tinyint', default: 1 })
    is_active: number;
}
