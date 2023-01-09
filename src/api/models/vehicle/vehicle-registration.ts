import { Column, Entity, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { Vehicle } from "./vehicle-model";

@Entity("VehicleRegistration")
export class VehicleRegistration {
    @PrimaryColumn()
    @OneToOne(() => Vehicle)
    @JoinColumn()
      id: Vehicle;

    @Column("varchar", { length: 20 })
      registrationNumber: string;

    @Column()
      registrationExp: Date;

    @Column("varchar", { length: 2 })
      registrationState: string;

    @Column("varchar", { length: 128 })
      nameOnRegistration: string;
}
