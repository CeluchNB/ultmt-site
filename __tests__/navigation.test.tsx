import React from 'react'
import { render, screen } from '@testing-library/react'
import Navigation from '../src/app/navigation'

describe('Navigation', () => {
    it('renders', () => {
        render(<Navigation />)

        expect(screen.getByText('The Ultmt App')).toBeTruthy()
        expect(screen.getByText('Privacy')).toBeTruthy()
        expect(screen.getByText('Delete Account')).toBeTruthy()
    });
});
