import { login } from '@/utils/network'

export default async function POST(req: Request) {
    try {
        const apiUrl = process.env.API_URL
        const apiKey = process.env.API_KEY ?? ''

        const data = await req.json()
        const { description, abbreviation, password } = data

        const token = await login({ email: 'noah.celuch@gmail.com', password })

        const response = await fetch(`${apiUrl}/api/v1/team-designation`, {
            method: 'POST',
            body: JSON.stringify({
                designationData: { description, abbreviation },
            }),
            headers: {
                'X-API-Key': apiKey,
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })

        const body = await response.json()

        return Response.json({ designation: body.designation }, { status: 201 })
    } catch (e) {
        return Response.json(e, { status: 400 })
    }
}
