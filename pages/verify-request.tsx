import Navigation from '@/app/navigation'
import { useSearchParams } from 'next/navigation'

export default function VerificationRequest() {
    console.log('htting page')
    const searchParams = useSearchParams()

    const verificationId = searchParams?.get('id')

    return (
        <div>
            <Navigation />
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <h2 style={{ color: '#ffd600' }}>Verification To Approve</h2>
            <form>
                <label htmlFor="verificationId">Verification Request ID</label>
                <input id="verificationId" name="verificationId" type="text" defaultValue={verificationId ?? ''} />

                <div style={{ flexDirection: 'row' }}>
                    <input type="radio" id="approve" name="response" style={{ marginRight: 5 }} />
                    <label htmlFor="approve">Approve</label>
                </div>
                <div style={{ flexDirection: 'row' }}>
                    <input type="radio" id="deny" name="response" style={{ marginRight: 5 }} />
                    <label htmlFor="deny">Deny</label>
                </div>

                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="text" />
                <button style={{ backgroundColor: '#3183ff', color: 'white', borderRadius: 5, padding: 5, justifySelf: 'center' }}>Respond</button>
            </form>
            </div>
        </div>
    )
}