import prisma from "@prisma/client";
import {
  Carlisting,
  Make,
  Model,
  Image,
  GearboxType,
  DriveType,
  FuelType,
  Order,
} from "../types";

const dbClient = new prisma.PrismaClient();

export default class Carlistings {
  id: number;
  mileage: number;
  description: string;
  price: number;
  make: Make;
  model: Model;
  images: Image[];
  gearboxType: GearboxType;
  driveType: DriveType;
  fuelType: FuelType;
  order: Order | null;

  constructor(
    id: number,
    mileage: number,
    description: string,
    price: number,
    make: Make,
    model: Model,
    images: Image[],
    gearboxType: GearboxType,
    driveType: DriveType,
    fuelType: FuelType,
    order: Order | null
  ) {
    (this.id = id),
      (this.mileage = mileage),
      (this.description = description),
      (this.price = price),
      (this.make = make),
      (this.model = model),
      (this.images = images),
      (this.gearboxType = gearboxType),
      (this.driveType = driveType),
      (this.fuelType = fuelType),
      (this.order = order);
  }

  static async findAllCarlisting() {
    const allCarlisting = await dbClient.carlisting.findMany({
      include: {
        make: true,
        model: true,
        gearboxType: true,
        driveType: true,
        fuelType: true,
      },
    });
    return allCarlisting;
  }
}
