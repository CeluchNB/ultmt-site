
export default async function handler(req: any, res: any) {
    try {
        const apiUrl = process.env.API_URL;
        const apiKey = process.env.API_KEY || '';
        // get token by logging in
        const jsonBody = JSON.stringify(req.body)
        const loginResponse = await fetch(`${apiUrl}/api/v1/auth/login`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': apiKey,
            },
            body: jsonBody,
        })
        const loginResult = await loginResponse.json()
        const { tokens: { access } } = loginResult

        // delete user with token
        await fetch(`${apiUrl}/api/v1/user/me`, {
            method: 'DELETE',
            headers: {
                'X-API-Key': apiKey,
                Authorization: `Bearer ${access}`,
            }
        })
        
    } catch (e) {
        return res.status(400).json({ message: 'An error occurred. Please try again.' })
    }

    return res.status(200).json({ message: 'Your account was successfully deleted.' })
}