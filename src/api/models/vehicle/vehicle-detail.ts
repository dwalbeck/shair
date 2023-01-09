import { Column, Entity, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { Vehicle } from "./vehicle-model";

export enum Color {
    RED = "red",
    YELLOW = "yellow",
    GREEN = "green",
    BLUE = "blue",
    ORANGE = "orange",
    WHITE = "white",
    BLACK = "black",
    GREY = "grey",
    SILVER = "silver",
    OTHER = "other"
}

@Entity("VehicleDetail")
export class VehicleDetail {
    @PrimaryColumn()
    @OneToOne(() => Vehicle)
    @JoinColumn()
      id: Vehicle;

    @Column("numeric", { precision: 2 })
      cashValue: number;

    @Column("unsigned big int")
      currentMileage: number;

    @Column({ type: "enum", enum: Color, default: Color.OTHER })
      vehicleColor: Color;

    @Column("text")
      vehicleDesc: string;
}
