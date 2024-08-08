/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import DeleteAccount from '../../src/app/delete-account/page'
import fetchMock from 'jest-fetch-mock'

describe('DeleteAccount', () => {
    beforeAll(() => {
        fetchMock.enableMocks()
    })
    afterAll(() => {
        fetchMock.disableMocks()
    })

    it('renders', () => {
        render(<DeleteAccount />)

        expect(screen.getByText('Username')).toBeTruthy()
        expect(screen.getByText('Password')).toBeTruthy()
        expect(screen.getByText('Delete')).toBeTruthy()
    })
})
