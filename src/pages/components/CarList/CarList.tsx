import { Carlisting } from "../../../helpers/types";

const CarList = ({ carlisting }: { carlisting: Carlisting[] }) => {
  return (
    <ul>
      {carlisting.map((car: Carlisting) => (
        <li key={car.id}>
          <div>{car.mileage}</div>
          <div>
            {car.make.name} {car.model.name}
            {car.description}
          </div>
          <div>{`${car.gearboxType.name} - ${car.driveType.name} - ${car.fuelType.name}`}</div>
          <div>{car.price}</div>
        </li>
      ))}
    </ul>
  );
};

export default CarList;
