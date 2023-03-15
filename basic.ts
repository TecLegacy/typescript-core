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

interface Format {
  year: number;
  owner: string;
}

function car(name: string): Format;
function car(name: string, year: number): Format;

function car();
