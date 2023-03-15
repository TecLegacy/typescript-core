// Named array are tuples -> array's value having name is called tuple
// React.js -> getter and setter are tuples

type Tuples = [x: string, y: number];
const xman = 'hello';
const a: Tuples = [xman, 20];
console.log(typeof a[0]);
console.log(a[0]);

// IMPLEMENTATION of useState with closures
function sayHello(value: string): [() => string, (v: string) => void] {
  let str: string = value;

  return [() => str, (v: string) => (str = v)];
}

// closure 1
const [greet, setGreet] = sayHello('Hello keshav');
console.log(greet());
setGreet('kanupriya');
console.log(greet());

// closure 2
const [greetWorld, setGreetWorld] = sayHello('Hey World');
console.log(greetWorld());
setGreetWorld('Hey India');
console.log(greetWorld());
