import { login } from '@/utils/network'

export default async function handler(req: Request) {
    try {
        const apiUrl = process.env.API_URL
        const apiKey = process.env.API_KEY ?? ''

        const data = await req.json()
        const { password, verificationId, response } = data
        const user = {
            email: 'noah.celuch@gmail.com',
            password: password,
        }
        const token = await login(user)

        const id = verificationId
        await fetch(
            `${apiUrl}/api/v1/verification-request/${id}?response=${response}`,
            {
                method: 'PUT',
                headers: {
                    'X-API-Key': apiKey,
                    Authorization: `Bearer ${token}`,
                },
            },
        )

        return Response.json({ message: 'success' })
    } catch (e) {
        return Response.json(e, { status: 400 })
    }
}
