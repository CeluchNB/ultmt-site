import { POST } from '../../src/app/api/delete-account/route'
import fetchMock from 'jest-fetch-mock'
import { ReadableStream } from 'stream/web'

describe('Delete Account API', () => {
    beforeAll(() => {
        fetchMock.enableMocks()
    })
    afterAll(() => {
        fetchMock.disableMocks()
    })

    it('handles success', async () => {
        fetchMock.mockResponseOnce(() =>
            Promise.resolve({ body: '{ "tokens": { "access": "token" }}' }),
        )

        const reqObject = {
            json: async () => ({ email: 'noah', password: 'Pass1234!' }),
        }

        const res = await POST(reqObject as any)

        expect(res.status).toBe(200)
        const data = await res.json()
        expect(data).toEqual({
            message: 'Your account was successfully deleted.',
        })
    })

    it('handles failure', async () => {
        fetchMock.mockResponseOnce(() => Promise.resolve({ body: 'badjson' }))

        const reqObject = {
            json: async () => ({ email: 'noah', password: 'Pass1234!' }),
        }
        const res = await POST(reqObject as any)

        expect(res.status).toBe(400)
        expect(await res.json()).toEqual({
            message: 'An error occurred. Please try again.',
        })
    })
})
