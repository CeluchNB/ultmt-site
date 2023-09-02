import React from 'react'
import { render, screen } from '@testing-library/react'
import Privacy from '../pages/privacy'

describe('Privacy', () => {
    it('renders', () => {
        render(<Privacy />)

        expect(screen.getByText('Privacy Policy')).toBeTruthy()
    })
})
