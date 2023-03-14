/**
 * Working with coordinates of x , y => World Map
 */

// @ Define it's type

interface Coordinate {
  x: number;
  y: number;
}
/**
 * FUNCTION OVERLOADING
 * TS has FO concept and JS doesn't have it
 * A function with different (parameters are called function overloading)
 */

// Step 1 Define variants - Obj , Number input
// const coordinates =(obj:Coordinate ):Coordinate => ();
function coordinates(str: string): Coordinate;
function coordinates(obj: Coordinate): Coordinate;
function coordinates(x: number, y: number): Coordinate;

// STEP 2 Implementation ( CAST & COERCE)
// "unknown" is safe type as "any" <- but you need to cast before hand.
function coordinates(arg1: unknown, arg2?: unknown): Coordinate {
  let coord = {
    x: 0,
    y: 0,
  };
  //   This type checking is happening at runtime after ts converts interface to js object
  if (typeof arg1 === 'object') {
    return {
      ...(arg1 as Coordinate),
    };
  } else if (typeof arg1 === 'string') {
    (arg1 as string).split(',').forEach(item => {
      const [key, value] = item.split(':');
      return (coord[key as 'x' | 'y'] = parseInt(value, 10));
    });
  } else {
    return {
      x: arg1 as number, // "as" telling TS implicitly we know its TYPE
      y: arg2 as number,
    };
  }
  return coord;
}
console.log(coordinates({ x: 20, y: 30 }));
console.log(coordinates(100, 300));
console.log(coordinates('x:77,y:99'));
