'use client'
import Navigation from '@/app/navigation'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function VerificationRequest() {
    const searchParams = useSearchParams()

    const verificationId = searchParams?.get('id')
    const [response, setResponse] = useState<'approved' | 'denied'>('denied')
    const [message, setMessage] = useState('')
    const [statusTextColor, setStatusTextColor] = useState('#00ff00')

    const handleSubmit = async (event: any) => {
        setMessage('')
        event.preventDefault()
        const data = {
            response,
            verificationId: event.target.verificationId.value,
            password: event.target.password.value,
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }

        const apiResponse = await fetch('/api/verify-request', options)
        if (apiResponse.status === 200) {
            setMessage('Success')
            setStatusTextColor('#00ff00')
        } else {
            setMessage(`Error: ${apiResponse.status}`)
            setStatusTextColor('#ff0000')
        }

        event.target.verificationId.value = ''
        event.target.password.value = ''
    }

    return (
        <div>
            <Navigation />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h2 style={{ color: '#ffd600' }}>Verification To Approve</h2>
                <form onSubmit={handleSubmit} role="form">
                    <label htmlFor="verificationId">
                        Verification Request ID
                    </label>
                    <input
                        id="verificationId"
                        name="verificationId"
                        type="text"
                        defaultValue={verificationId ?? ''}
                    />

                    <div style={{ flexDirection: 'row' }}>
                        <input
                            type="radio"
                            id="approve"
                            name="response"
                            style={{ marginRight: 5 }}
                            onChange={() => {
                                setResponse('approved')
                            }}
                        />
                        <label htmlFor="approve">Approve</label>
                    </div>
                    <div style={{ flexDirection: 'row' }}>
                        <input
                            type="radio"
                            id="deny"
                            name="response"
                            style={{ marginRight: 5 }}
                            onChange={() => {
                                setResponse('denied')
                            }}
                            defaultChecked
                        />
                        <label htmlFor="deny">Deny</label>
                    </div>

                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" />
                    <button
                        style={{
                            backgroundColor: '#3183ff',
                            color: 'white',
                            borderRadius: 5,
                            padding: 5,
                            justifySelf: 'center',
                        }}
                    >
                        Respond
                    </button>
                </form>
                <p style={{ color: statusTextColor }}>{message}</p>
            </div>
        </div>
    )
}
