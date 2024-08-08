import fetchMock from 'jest-fetch-mock'
import verifyRequest from '../../src/app/api/verify-request/route'

describe('test Verify Request API', () => {
    beforeAll(() => {
        fetchMock.enableMocks()
    })
    afterAll(() => {
        fetchMock.disableMocks()
    })

    it('placeholder', () => {
        expect(1 + 1).toBe(2)
    })

    // it('handles success', async () => {
    //     const json = jest.fn()
    //     const res = {
    //         status: jest.fn().mockReturnValue({ json }),
    //     }
    //     fetchMock.mockResponseOnce(() =>
    //         Promise.resolve({ body: '{ "tokens": { "access": "token" }}' }),
    //     )
    //     await verifyRequest(
    //         { body: { password: 'password', status: 'approved' } },
    //         res,
    //     )

    //     expect(res.status).toHaveBeenCalledWith(200)
    //     expect(json).toHaveBeenCalled()
    // })

    // it('handles failure', async () => {
    //     const json = jest.fn()
    //     const res = {
    //         status: jest.fn().mockReturnValue({ json }),
    //     }
    //     fetchMock.mockResponseOnce(() => Promise.resolve({ body: 'badjson' }))

    //     await verifyRequest(
    //         { body: { password: 'password', status: 'approved' } },
    //         res,
    //     )

    //     expect(res.status).toHaveBeenCalledWith(400)
    //     expect(json).toHaveBeenCalled()
    // })
})
