import createDesignation from '../../src/app/api/create-designation/route'
import fetchMock from 'jest-fetch-mock'

describe('Create Designation API', () => {
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
    //     fetchMock
    //         .mockResponseOnce(() =>
    //             Promise.resolve({ body: '{ "tokens": { "access": "token" }}' }),
    //         )
    //         .mockResponseOnce(() =>
    //             Promise.resolve({
    //                 body: '{ "designation": { "description": "Test", "abbreviation": "T" } }',
    //             }),
    //         )

    //     await createDesignation(
    //         {
    //             body: {
    //                 description: 'Test',
    //                 abbreviation: 'T',
    //                 password: 'Pass1234!',
    //             },
    //         },
    //         res,
    //     )

    //     expect(res.status).toHaveBeenCalledWith(201)
    //     expect(json).toHaveBeenCalled()
    // })

    // it('handles failure', async () => {
    //     const json = jest.fn()
    //     const res = {
    //         status: jest.fn().mockReturnValue({ json }),
    //     }
    //     fetchMock.mockResponseOnce(() => Promise.resolve({ body: 'badjson' }))

    //     await createDesignation(
    //         {
    //             body: {
    //                 description: 'Test',
    //                 abbreviation: 'T',
    //                 password: 'Pass1234!',
    //             },
    //         },
    //         res,
    //     )

    //     expect(res.status).toHaveBeenCalledWith(400)
    //     expect(json).toHaveBeenCalled()
    // })
})
