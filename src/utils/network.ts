export const login = async (user: {
    email: string
    password: string
}): Promise<string> => {
    const apiUrl = process.env.API_URL
    const apiKey = process.env.API_KEY ?? ''
    // get token by logging in
    const jsonBody = JSON.stringify(user)
    const loginResponse = await fetch(`${apiUrl}/api/v1/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': apiKey,
        },
        body: jsonBody,
    })
    const loginResult = await loginResponse.json()
    const {
        tokens: { access },
    } = loginResult

    return access
}
