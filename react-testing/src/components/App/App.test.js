import { add } from './App';

// eslint-disable-next-line no-undef
test('add test', () => {
  const value = add(1, 2);
  // eslint-disable-next-line no-undef
  expect(value).toBe(3);
});
