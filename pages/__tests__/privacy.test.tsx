import { render, screen } from '@testing-library/react'
import Privacy from '../privacy'

describe('Privacy', () => {
    it('renders', () => {
        render(<Privacy />)

        expect(screen.getByText('Privacy Policy')).toBeTruthy()
    })
})
