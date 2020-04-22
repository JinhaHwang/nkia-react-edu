import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

function funcName(param) {
  // return undefined
}
funcName('hello')
// undeinfed

function double(num) {

  return num*2
}

double(2)
// 4

const double = num => num * 2

const double = (num) => {
  console.log(num)
  return num * 2
}

const getUndefined = () => {}
getUndefined()
// undeinfed
