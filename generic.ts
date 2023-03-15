function updateYear<T>(year: T): [() => T, (v: T) => void] {
  let str: T = year;

  return [() => str, (v: T) => (str = v)];
}

const [year, setYear] = updateYear(10);
console.log(year());
console.log(typeof year());
setYear(30);
console.log(year());

// RANKER - Pokemon

function ranker<RankItem>(
  items: RankItem[],
  ranks: (v: RankItem) => number
): RankItem[] {
  const rank = items.map(item => ({
    item,
    rank: ranks(item),
  }));
  console.log(rank);
  return [];
}

interface Pokemon {
  item: string;
  hp: number;
}
const poskemon: Pokemon[] = [
  {
    item: 'squirtal',
    hp: 50,
  },
  {
    item: 'bulbasur',
    hp: 20,
  },
];

ranker(poskemon, ({ hp }) => hp);
ranker(poskemon, ({ hp }) => hp);
ranker(poskemon, ({ hp }) => hp);
