import Navigation from '@/app/navigation'
import Link from 'next/link'
import { useState } from 'react'

export default function DeleteAccount() {

    const [statusText, setStatusText] = useState('')
    const [statusTextColor, setStatusTextColor] = useState('#00ff00')

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const data = {
            email: event.target.username.value,
            password: event.target.password.value,
        }
        const jsonData = JSON.stringify(data)

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: jsonData,
        }
        const response = await fetch('/api/delete-account', options)
        const result = await response.json();

        setStatusText(result.message)
        if (response.status === 200) {
            setStatusTextColor('#00ff00')
        } else {
            setStatusTextColor('#ff0000')
        }
        event.target.username.value = ''
        event.target.password.value = ''
    }

    return (
        <div>
            <Navigation />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <form onSubmit={handleSubmit} role="form">
                        <label htmlFor="username">Username</label>
                        <input id="username" name="username" type="text" />
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" />
                        <button style={{ color: 'white', backgroundColor: 'red', marginTop: 5, borderRadius: 4, width: '100%' }}>Delete</button>
                    </form>
                </div>
                <p style={{ color: statusTextColor }}>{statusText}</p>
                <p>Deleting your account removes your data immediately, but your name will still appear on games and statistics as if you were added as a guest.</p>
                <p>Need more help? Email <Link style={{ margin: 0 }} href="mailto:developer@theultmtapp.com" className="link">developer@theultmtapp.com</Link></p>
            </div>
        </div>
    )
}
