/*--- Seeding ---*/
export interface CarlistingSeed {
  mileage: number;
  description: string;
  price: number;
  make: MakeSeed;
  model: ModelSeed;
  images: ImageSeed[];
  gearboxType: GearboxTypeSeed;
  driveType: DriveTypeSeed;
  fuelType: FuelTypeSeed;
  is_online: boolean;
  order: null;
}

export type MakeSeed = {
  name: string;
};

export type ModelSeed = {
  name: string;
};

export type ImageSeed = {
  url: string;
};
export type GearboxTypeSeed = {
  name: string;
};

export type DriveTypeSeed = {
  name: string;
};

export type FuelTypeSeed = {
  name: string;
};

/*--- Client ---*/
export type Carlisting = {
  id: number;
  mileage: number;
  description: string;
  price: number;
  make: Make;
  makeId: number;
  model: Model;
  modelId: number;
  images: Image[];
  gearboxType: GearboxType;
  gearboxId: number;
  driveType: DriveType;
  driveId: number;
  fuelType: FuelType;
  fuelId: number;
  is_online: boolean;
  order: Order | null;
  orderId: number;
  createdAt: Date | string;
  updatedAt: Date | string | null;
};

export type Make = {
  id: number;
  name: string;
  carlisting: Carlisting[] | [];
};

export type Model = {
  id: number;
  name: string;
  carlisting: Carlisting[];
};

export type Image = {
  id: number;
  url: string;
  carlisting: Carlisting;
};

export type GearboxType = {
  id: number;
  name: string;
  carlisting: Carlisting[];
};

export type DriveType = {
  id: number;
  name: string;
  carlisting: Carlisting[];
};

export type FuelType = {
  id: number;
  name: string;
  carlisting: Carlisting[];
};

export type Order = {
  id: number;
  carlisting: Carlisting;
  hasDeliveryService: boolean;
  totalPrice: number;
};

type Customer = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  order: Order[];
};
