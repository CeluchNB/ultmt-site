import { login } from '@/utils/network'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
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

        return NextResponse.json({ message: 'success' })
    } catch (e) {
        return NextResponse.json(e, { status: 400 })
    }
}
