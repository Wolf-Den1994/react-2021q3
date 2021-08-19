import { add, total } from './App';
/* eslint-disable no-undef */

test('add test', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(4, 2)).toBe(6);
});

test('total', () => {
  expect(total(4, 5)).toBe('$9');
});
