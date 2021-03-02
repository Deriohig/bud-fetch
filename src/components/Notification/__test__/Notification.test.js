import React from 'react';
import ReactDOM from 'react-dom';
import Notification from '../index';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'

const props = {
    title: 'Title',
    kind: 'error',
    message: 'message',
};

afterEach(cleanup);

it("renders without crashing", ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<Notification {...props} />, div)
})

it("renders with a title", ()=> {
    const { getByTestId } = render(<Notification {...props} />)
    expect(getByTestId('Notification')).toHaveTextContent('Title');
})

it("renders with a message", ()=> {
    const { getByTestId } = render(<Notification {...props} />)
    expect(getByTestId('Notification')).toHaveTextContent('message');
})

it("renders with an error style", ()=> {
    const { getByTestId } = render(<Notification {...props} />)
    const style = window.getComputedStyle(getByTestId('Notification'));
    expect(style.borderColor).toBe('#da1e28');
    expect(style.backgroundColor).toBe('rgb(254, 240, 240)');
})

it("matches snapshot", ()=> {
    const snapshot = renderer.create(<Notification {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
})
