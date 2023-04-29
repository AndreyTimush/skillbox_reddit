export function merge<O extends Object>(obj: O) {
  return <K extends object>(obj2: K) => ({
    ...obj,
    ...obj2,
  });
}