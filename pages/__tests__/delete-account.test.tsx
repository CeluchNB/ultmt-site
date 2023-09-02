import { render, screen, waitFor } from '@testing-library/react'
import DeleteAccount from '../delete-account'
import fetchMock from 'jest-fetch-mock'
import userEvent from '@testing-library/user-event'

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
