import { login } from '@/utils/network'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const apiUrl = process.env.API_URL
        const apiKey = process.env.API_KEY ?? ''
        // get token by logging in
        const data = await req.json()
        const access = await login(data)

        // delete user with token
        await fetch(`${apiUrl}/api/v1/user/me`, {
            method: 'DELETE',
            headers: {
                'X-API-Key': apiKey,
                Authorization: `Bearer ${access}`,
            },
        })
    } catch (e) {
        return new NextResponse(
            JSON.stringify({
                message: 'An error occurred. Please try again.',
            }),
            { status: 400 },
        )
    }

    return new NextResponse(
        JSON.stringify({
            message: 'Your account was successfully deleted.',
        }),
    )
}
