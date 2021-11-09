import React from 'react';
import HelloWorld from './HelloWorld';
import { fireEvent, render } from '@testing-library/react'; // Va rendre notre composant
import { screen } from '@testing-library/dom';

// beforeEach(() => {
//   render(<Calculator/>)
//   a = document.body.querySelector("#a")
//   b = document.body.querySelector("#b")
//   selectOperator = document.body.querySelector("#operator")
//   total = screen.getByTestId("total")
// })

// test('Calculator do a right addition', function (){
//   fireEvent.change(a, {target: {value: '2'}})
//   expect(a.value).toBe('2')
//   expect(total).toHaveTextContent('2')
// })

test('Mon premier test du projet', function () {
  render(<HelloWorld handleClick={() => console.log('ok')} />);
  const title = screen.getByText('Hello World Yeah');
  expect(title).toBeInTheDocument();
});

test('Test on click button', function () {
  const mockClick = jest.fn();
  render(<HelloWorld handleClick={mockClick} />);
  const button = document.body.querySelector('button');
  fireEvent.click(button);
  expect(mockClick.mock.calls.length).toBe(1);
});
