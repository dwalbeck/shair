import {
  Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";

@Entity("Vehicle")
export class Vehicle {
  @PrimaryGeneratedColumn("uuid")
    id: string;

  @Column("varchar", { length: 20 })
    vinNumber: string;

  @Column("varchar", { length: 10 })
    licensePlateNumber: string;

  @CreateDateColumn()
    createdDate: Date;

  @UpdateDateColumn()
    updatedDate: Date;

  @DeleteDateColumn()
    deletedDate: Date;
}
