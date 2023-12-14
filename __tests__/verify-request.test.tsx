import React from 'react'
import { render, screen } from '@testing-library/react'
import VerifyRequest from '../pages/verify-request'
import fetchMock from 'jest-fetch-mock'

describe('VerifyRequest', () => {
    beforeAll(() => {
        fetchMock.enableMocks()
    })
    afterAll(() => {
        fetchMock.disableMocks()
    })

    it('renders', () => {
        render(<VerifyRequest />)

        expect(screen.getByText('Verification To Approve')).toBeTruthy()
        expect(screen.getByText('Verification Request ID')).toBeTruthy()
        expect(screen.getByText('Approve')).toBeTruthy()
        expect(screen.getByText('Deny')).toBeTruthy()
        expect(screen.getByText('Password')).toBeTruthy()
        expect(screen.getByText('Respond')).toBeTruthy()
    })
})
