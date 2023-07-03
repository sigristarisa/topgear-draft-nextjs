/*--- Seeding ---*/
export interface CarlistingSeed {
  mileage: number;
  description: string;
  price: number;
  makeId?: number;
  modelId?: number;
  gearboxId?: number;
  driveId?: number;
  fuelId?: number;
  is_online: boolean;
  orderId?: number | null;
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
  make: MakeType;
  makeId: number;
  model: ModelType;
  modelId: number;
  images: ImageType[];
  gearboxType: GearboxType;
  gearboxId: number;
  driveType: DriveType;
  driveId: number;
  fuelType: FuelType;
  fuelId: number;
  is_online: boolean;
  order: OrderType | null;
  orderId: number;
  createdAt: Date | string;
  updatedAt: Date | string | null;
};

export type MakeType = {
  id?: number;
  name?: string;
  carlisting?: Carlisting[] | [];
};

export type ModelType = {
  id: number;
  name: string;
  carlisting: Carlisting[];
};

export type ImageType = {
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

export type OrderType = {
  id: number;
  carlisting: Carlisting;
  hasDeliveryService: boolean;
  totalPrice: number;
};

type CustomerType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  order: OrderType[];
};
