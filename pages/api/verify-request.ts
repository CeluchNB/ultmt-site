import { login } from '@/utils/network'

export default async function handler(req: any, res: any) {
    const apiUrl = process.env.API_URL
    const apiKey = process.env.API_KEY ?? ''

    const user = {
        email: 'noah.celuch@gmail.com',
        password: req.body.password,
    }
    // const token = await login(user)

    const id = req.body.verificationId
    const response = req.body.response
    // const request = await fetch(`${apiUrl}/api/v1/verification-request/${id}?response=${response}`, { method: 'PUT' })

    console.log('data', user, id, response)
    // console.log('returned', request)
    res.status(200).json({ message: 'success' })
} 