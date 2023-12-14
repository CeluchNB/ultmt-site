import { login } from '@/utils/network'

export default async function handler(req: any, res: any) {
    try {
        const apiUrl = process.env.API_URL
        const apiKey = process.env.API_KEY ?? ''

        const user = {
            email: 'noah.celuch@gmail.com',
            password: req.body.password,
        }
        const token = await login(user)

        const id = req.body.verificationId
        const response = req.body.response
        await fetch(
            `${apiUrl}/api/v1/verification-request/${id}?response=${response}`,
            { method: 'PUT', headers: { 'X-API-Key': apiKey, Authorization: `Bearer ${token}` } }
        )

        res.status(200).json({ message: 'success' })
    } catch (e) {
        res.status(400).json(e)
    }
} 