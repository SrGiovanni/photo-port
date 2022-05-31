import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm></ContactForm>);
    })

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm></ContactForm>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
})

it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
})