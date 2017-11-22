import { engine, askName } from '../index';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const question = () => {
  const a = Math.round(Math.random() * 20);
  const b = Math.round(Math.random() * 20);
  const answer = gcd(a, b).toString();
  return [`${a} ${b}`, answer];
};

export default () => {
  const name = askName();
  return engine(name, question);
};