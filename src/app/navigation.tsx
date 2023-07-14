import Link from "next/link"

export default function Navigation() {
    return (
        <nav className="p-4">
            <Link href="/" className="flex">
                <img
                src="./ultmt-icon.png"
                alt="Ultimate App Icon"
                width={60}
                height={60}
                style={{ borderRadius: 30 }}
                />
                <h1>The Ultmt App</h1>
            </Link>
            <Link className="link" href="/privacy">Privacy</Link>
            <Link className="link" href="/delete-account">Delete Account</Link>
      </nav>
    )
}
