import React from 'react'
import { render, screen } from '@testing-library/react'
import CreateDesignation from '../../pages/admin/create-designation'

describe('CreateDesignation', () => {
    it('renders correctly', () => {
        render(<CreateDesignation />)

        expect(screen.getByText('Designation Description')).toBeTruthy()
        expect(screen.getByText('Designation Abbreviation')).toBeTruthy()
        expect(screen.getByText('Password')).toBeTruthy()
    })
})
