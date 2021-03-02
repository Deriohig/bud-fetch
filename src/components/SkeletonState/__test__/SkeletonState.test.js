import React from 'react';
import ReactDOM from 'react-dom';
import SkeletonState from '../index';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'

const props = {
    width: '30%'
}

afterEach(cleanup);

it("renders without crashing", ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<SkeletonState {...props} />, div)
})

it("renders with a certain width", ()=> {
    const { getByTestId } = render(<SkeletonState {...props} />)
    const style = window.getComputedStyle(getByTestId('SkeletonState'));
    expect(style.width).toBe('30%');
})

it("matches snapshot", ()=> {
    const snapshot = renderer.create(<SkeletonState {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
})
