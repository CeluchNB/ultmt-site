import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'

describe('Page', () => {
    it('renders', () => {
        render(<Home />)

        expect(screen.getByTestId('app-store')).toBeTruthy()
        expect(screen.getByTestId('google-play')).toBeTruthy()
    })
});
