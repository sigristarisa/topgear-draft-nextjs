/*--- Seeding ---*/
export type CarlistingSeed = {
  mileage: number;
  description: string;
  price: number;
  make: MakeSeed;
  model: ModelSeed;
  images: ImageSeed[];
  gearboxType: GearboxTypeSeed;
  driveType: DriveTypeSeed;
  fuelType: FuelTypeSeed;
  order: null;
};

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
  model: Model;
  images: Image[];
  gearboxType: GearboxType;
  driveType: DriveType;
  fuelType: FuelType;
  order: Order;
};

type Make = {
  id: number;
  name: string;
  carlisting: Carlisting[];
};

type Model = {
  id: number;
  name: string;
  carlisting: Carlisting[];
};

type Image = {
  id: number;
  url: string;
  carlisting: Carlisting;
};

type GearboxType = {
  id: number;
  name: string;
  carlisting: Carlisting[];
};

type DriveType = {
  id: number;
  name: string;
  carlisting: Carlisting[];
};

type FuelType = {
  id: number;
  name: string;
  carlisting: Carlisting[];
};

type Order = {
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
