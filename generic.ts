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

// function ranker<RankItem>(
//   items: RankItem[],
//   ranks: (v: RankItem) => number
// ): RankItem[] {
//   const rank = items.map(item => ({
//     item,
//     rank: ranks(item),
//   }));
//   console.log(rank);
//   return [];
// }

// interface Pokemon {
//   item: string;
//   hp: number;
// }
// const poskemon: Pokemon[] = [
//   {
//     item: 'squirtal',
//     hp: 50,
//   },
//   {
//     item: 'bulbasur',
//     hp: 20,
//   },
// ];

// ranker(poskemon, ({ hp }) => hp);
// ranker(poskemon, ({ hp }) => hp);
// ranker(poskemon, ({ hp }) => hp);

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  item: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = item.map(item => ({
    item,
    rank: rank(item),
  }));

  //   Sort pokemon
  ranks.sort((a, b) => a.rank - b.rank);
  console.log(rank);
  return ranks.map(rank => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemini: Pokemon[] = [
  {
    name: 'bulbasuar',
    hp: 50,
  },
  {
    name: 'charizard',
    hp: 101,
  },
  {
    name: 'squirtal',
    hp: 70,
  },
];

console.log(ranker(pokemini, ({ hp }) => hp));
