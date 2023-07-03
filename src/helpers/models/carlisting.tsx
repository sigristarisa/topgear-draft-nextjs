import prisma from "@prisma/client";
import {
  MakeType,
  ModelType,
  ImageType,
  GearboxType,
  DriveType,
  FuelType,
  OrderType,
} from "../types";

const dbClient = new prisma.PrismaClient();

export default class Car {
  id: number;
  mileage: number;
  description: string;
  price: number;
  make: MakeType;
  model: ModelType;
  images: ImageType[];
  gearboxType: GearboxType;
  driveType: DriveType;
  fuelType: FuelType;
  order: OrderType | null;

  constructor(
    id: number,
    mileage: number,
    description: string,
    price: number,
    make: MakeType,
    model: ModelType,
    images: ImageType[],
    gearboxType: GearboxType,
    driveType: DriveType,
    fuelType: FuelType,
    order: OrderType | null
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

  static async findAll() {
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

  static async findByMake(make: MakeType) {
    const foundCarlisting = await dbClient.carlisting.findMany({
      where: {
        make: {
          name: make.name,
        },
      },
    });
    return foundCarlisting;
  }
}
