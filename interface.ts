import houses from './challenge/houses.json';
interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

function findHouses(houses: string | House[]): HouseWithID[];
function findHouses(
  houses: string | House[],
  filter: (house: House) => boolean
): HouseWithID[];

// Implementation
function findHouses(
  arg1: string | House[],
  arg2?: (house: House) => boolean
): HouseWithID {
  let tempHouseWithID = {
    id: 0,
    name: null,
    planets: null,
  };
  const housesType = typeof arg1 === 'string' ? JSON.parse(arg1) : arg1;

  console.log(housesType);
  return [];
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === 'Atreides')
);

console.log(findHouses(houses, ({ name }) => name === 'Harkonnen'));
