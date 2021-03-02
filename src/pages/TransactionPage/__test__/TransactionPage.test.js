import React from 'react';
import TransactionPage from '../TransactionPage';
import { render, cleanup, waitFor } from '@testing-library/react';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import MockData from './__mocks__/MockData';
import EmptyData from './__mocks__/EmptyData';

afterEach(cleanup);

const getData = (data) => {
    const mockJsonPromise = Promise.resolve(data);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });
    global.fetch = jest.fn().mockImplementationOnce(() => mockFetchPromise);
}

it('renders data into cards after skeleton loader', async () => {
    getData(MockData);
    const { getByTestId, getAllByTestId } = render(<TransactionPage />);
    expect(getAllByTestId('SkeletonState')).toHaveLength(2);
    const CardWrapper = await waitFor(() => getByTestId('CardWrapper'));
    expect(CardWrapper.children).toHaveLength(10);
});

it('renders without data', async () => {
    getData(EmptyData);
    const { getByTestId, getAllByTestId } = render(<TransactionPage />);
    expect(getAllByTestId('SkeletonState')).toHaveLength(2);
    const CardWrapper = await waitFor(() => getByTestId('CardWrapper'));
    expect(CardWrapper.children).toHaveLength(0);
});

it('renders error with failed API call', async () => {
    const { getByTestId, getAllByTestId } = render(<TransactionPage />);
    expect(getAllByTestId('SkeletonState')).toHaveLength(2);
    const Notification = await waitFor(() => getByTestId('Notification'));
    expect(Notification).toBeVisible();
});

it('matches snapshot', () => {
    getData(MockData);
    const snapshot = renderer.create(<TransactionPage />).toJSON();
    expect(snapshot).toMatchSnapshot();
});
