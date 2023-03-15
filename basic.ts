// Types

const userName = '2';

const obj = {
  sad: 'mae',
};

[1, 2, 3].forEach(v => console.log(v));

const keshav = (a: number, b: number) => {
  return a + b;
};

const x = keshav(10, 20);

console.log(x);

//DONE: - RECORD<KEY,TYPE>
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

console.log(cats.boris);
// ^?

// DONE: FUNCTION OVERLOADING
interface Format {
  year: number;
  owner: string;
}

// FUNCTIONS SIGNATURE
function car(name: string): Format;
function car(name: string, year: number): Format;
// IMPEMENTATION
function car(arg1: string, arg2?: unknown): Format {
  const carName: string = arg1;
  const year = typeof arg2 === 'number' ? arg2 : Number(arg2);

  return {
    year: year || 10,
    owner: carName || 'No one',
  };
}
