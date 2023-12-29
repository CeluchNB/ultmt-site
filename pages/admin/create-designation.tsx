import Navigation from '@/app/navigation'
import { useState } from 'react'

export default function CreateDesignation() {
    const [status, setStatus] = useState('')

    const handleSubmit = async (event: any) => {
        setStatus('')
        event.preventDefault()

        const data = {
            description: event.target.description.value,
            abbreviation: event.target.abbreviation.value,
            password: event.target.password.value,
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }

        try {
            const response = await fetch('/api/create-designation', options)
            const body = await response.json()
            setStatus(
                `Designation: Desc - ${body.designation.description}, Abbr - ${body.designation.abbreviation}`,
            )
        } catch (e) {
            setStatus(`Error: ${e}`)
        }

        event.target.description.value = ''
        event.target.abbreviation.value = ''
        event.target.password.value = ''
    }

    return (
        <div>
            <Navigation />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="description">Designation Description</label>
                    <input type="text" id="description" name="description" />

                    <label htmlFor="abbreviation">
                        Designation Abbreviation
                    </label>
                    <input type="text" id="abbreviation" name="abbreviation" />

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
                        Create
                    </button>
                    <p>{status}</p>
                </form>
            </div>
        </div>
    )
}
