import Navigation from "@/app/navigation"
import Link from "next/link"

export default function DeleteAccount() {
    return (
        <div>
            <Navigation />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type="text" />
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" />
                    <button style={{ color: 'white', backgroundColor: 'red', marginTop: 5, borderRadius: 4 }}>Delete</button>
                </div>
                <p>Need more help? Email <Link style={{ margin: 0 }} href="mailto:developer@theultmtapp.com" className="link">developer@theultmtapp.com</Link></p>
            </div>
        </div>
    )
}
