/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Privacy from '../../src/app/privacy/page'

describe('Privacy', () => {
    it('renders', () => {
        render(<Privacy />)

        expect(screen.getByText('Privacy Policy')).toBeTruthy()
    })
})
