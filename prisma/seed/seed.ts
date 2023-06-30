import { carlisting } from "./rawCarlisting";
import { makeList } from "./rawMake";
import { modelList } from "./rawModel";
import { image1 } from "./rawImage";
import { gearboxList } from "./rawGearboxType";
import { driveList } from "./rawDriveType";
import { fuelList } from "./rawFuelType";
import {
  CarlistingSeed,
  MakeSeed,
  ModelSeed,
  ImageSeed,
  GearboxTypeSeed,
  DriveTypeSeed,
  FuelTypeSeed,
} from "../../helpers/types";
import prisma from "@prisma/client";

const dbClient = new prisma.PrismaClient();

const seed = async (): Promise<void> => {
  await createMakeData();
  await createModelData();
  await createGearboxData();
  await createDriveData();
  await createFuelData();
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

const createModelData = async (): Promise<ModelSeed[]> => {
  const modelArr = [];
  for (const model of modelList) {
    const createdModel = await dbClient.model.create({
      data: model,
    });
    modelArr.push(createdModel);
  }
  return modelArr;
};

const createGearboxData = async (): Promise<GearboxTypeSeed[]> => {
  const gearboxArr = [];
  for (const gearbox of gearboxList) {
    const createdGearbox = await dbClient.gearboxType.create({
      data: gearbox,
    });
    gearboxArr.push(createdGearbox);
  }
  return gearboxArr;
};

const createDriveData = async (): Promise<DriveTypeSeed[]> => {
  const driveArr = [];
  for (const drive of driveList) {
    const createdDrive = await dbClient.driveType.create({
      data: drive,
    });
    driveArr.push(createdDrive);
  }
  return driveArr;
};

const createFuelData = async (): Promise<FuelTypeSeed[]> => {
  const fuelArr = [];
  for (const fuel of fuelList) {
    const createdFuel = await dbClient.fuelType.create({
      data: fuel,
    });
    fuelArr.push(createdFuel);
  }
  return fuelArr;
};

seed()
  .catch(async (e) => {
    console.error(e);
  })
  .then(() => process.exit(1));
