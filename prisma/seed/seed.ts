import { carlisting } from "./rawCarlisting";
import { makeList } from "./rawMake";
import { model } from "./rawModel";
import { image1 } from "./rawImage";
import { gearbox } from "./rawGearboxType";
import { drive } from "./rawDriveType";
import { fuel } from "./rawFuelType";
import {
  CarlistingSeed,
  MakeSeed,
  Make,
  ModelSeed,
  ImageSeed,
  GearboxTypeSeed,
  DriveTypeSeed,
  FuelTypeSeed,
} from "../../helpers/types";
import prisma from "@prisma/client";
const dbClient = new prisma.PrismaClient();

const seed = async (): Promise<void> => {
  process.exit(0);
};

const createMakeData = async (): Promise<MakeSeed[]> => {
  const makeArr = [];
  for (const make of makeList) {
    const createdMake = await dbClient.make.create({
      data: make,
    });
    makeArr.push(createdMake);
  }
  return makeArr;
};
