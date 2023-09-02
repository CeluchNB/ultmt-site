import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Page', () => {
    it('renders', () => {
        render(<Home />)

        expect(screen.getByTestId('app-store')).toBeTruthy()
        expect(screen.getByTestId('google-play')).toBeTruthy()
    })
});
