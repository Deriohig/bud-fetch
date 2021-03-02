import React from 'react';
import ReactDOM from 'react-dom';
import TransactionCard from '../index';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'

const props = {
    date: '18/02/1993',
    currency: 'USD',
    value: '81.43',
    description: 'Chocolate',
    category: 'Food'
}

afterEach(cleanup);

it("renders without crashing", ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<TransactionCard {...props} />, div)
})

it("renders a date", ()=> {
    const { getByTestId } = render(<TransactionCard {...props} />)
    expect(getByTestId('TransactionCard')).toHaveTextContent('18/02/1993');
})

it("renders a currency", ()=> {
    const { getByTestId } = render(<TransactionCard {...props} />)
    expect(getByTestId('TransactionCard')).toHaveTextContent('USD');
})

it("renders a value", ()=> {
    const { getByTestId } = render(<TransactionCard {...props} />)
    expect(getByTestId('TransactionCard')).toHaveTextContent('81.43');
})

it("renders a category", ()=> {
    const { getByTestId } = render(<TransactionCard {...props} />)
    expect(getByTestId('TransactionCard')).toHaveTextContent('Food');
})

it("renders a description", ()=> {
    const { getByTestId } = render(<TransactionCard {...props} />)
    expect(getByTestId('TransactionCard')).toHaveTextContent('Chocolate');
})

it("matches snapshot", ()=> {
    const snapshot = renderer.create(<TransactionCard {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
})
