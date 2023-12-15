import deleteAccount from '../../pages/api/delete-account'
import fetchMock from 'jest-fetch-mock'

describe('Delete Account API', () => {
    beforeAll(() => {
        fetchMock.enableMocks()
    })
    afterAll(() => {
        fetchMock.disableMocks()
    })

    it('handles success', async () => {
        const json = jest.fn()
        const res = {
            status: jest.fn().mockReturnValue({ json }),
        }
        fetchMock.mockResponseOnce(() =>
            Promise.resolve({ body: '{ "tokens": { "access": "token" }}' }),
        )
        await deleteAccount(
            { body: { email: 'noah', password: 'Pass1234!' } },
            res,
        )

        expect(res.status).toHaveBeenCalledWith(200)
        expect(json).toHaveBeenCalled()
    })

    it('handles failure', async () => {
        const json = jest.fn()
        const res = {
            status: jest.fn().mockReturnValue({ json }),
        }
        fetchMock.mockResponseOnce(() => Promise.resolve({ body: 'badjson' }))

        await deleteAccount(
            { body: { email: 'noah', password: 'Pass1234!' } },
            res,
        )

        expect(res.status).toHaveBeenCalledWith(400)
        expect(json).toHaveBeenCalled()
    })
})
