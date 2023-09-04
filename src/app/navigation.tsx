import Link from "next/link"

export default function Navigation() {
    return (
        <nav className="p-4 flex flex-col sm:flex-row text-center">
            <Link href="/" className="flex">
                <img
                src="./ultmt-icon.png"
                alt="Ultimate App Icon"
                width={60}
                height={60}
                style={{ borderRadius: 30, maxHeight: 60 }}
                />
                <h1 className="ml-4 mr-0 sm:mr-4">The Ultmt App</h1>
            </Link>
            <Link className="link m-1 sm:m-4" href="/privacy">Privacy</Link>
            <Link className="link m-1 sm:m-4" href="/delete-account">Delete Account</Link>
      </nav>
    )
}
