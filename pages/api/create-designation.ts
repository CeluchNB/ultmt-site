import { login } from '@/utils/network'

export default async function handler(req: any, res: any) {
    try {
        const apiUrl = process.env.API_URL
        const apiKey = process.env.API_KEY ?? ''

        const { description, abbreviation, password } = req.body

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

        res.status(201).json({ designation: body.designation })
    } catch (e) {
        res.status(400).json(e)
    }
}
