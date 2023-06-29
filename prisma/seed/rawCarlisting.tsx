import { CarlistingSeed } from "../../helpers/types";
import { make } from "./rawMake";
import { model } from "./rawModel";
import { image1 } from "./rawImage";
import { gearbox } from "./rawGearboxType";
import { drive } from "./rawDriveType";
import { fuel } from "./rawFuelType";

export const carlisting: CarlistingSeed[] = [
  {
    mileage: 17304,
    description: "2.0TSI R-Line 4Motion DSG",
    price: 41900,
    make: make.volkswagen,
    model: model.tiguan,
    images: [image1],
    gearboxType: gearbox.manual,
    driveType: drive.awd,
    fuelType: fuel.gasoline,
    order: [],
  },
];
