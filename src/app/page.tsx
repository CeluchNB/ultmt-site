import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <nav className="p-4">
        <Image
          src="/ultmt-icon.png"
          alt="Ultimate App Icon"
          width={60}
          height={60}
          style={{ borderRadius: 30 }}
        />
        <h1>The Ultmt App</h1>
      </nav>
      <main className="flex min-h-screen flex-col items-center p-8">
        <a href="https://www.apple.com/app-store/">
          <Image
            src="/app-store.svg"
            alt="Download on the App Store"
            width={400}
            height={96}
          />
        </a>
        <a href='http://play.google.com/store/'>
          <Image
            alt='Get it on Google Play'
            src="/play-store.png"
            width={458}
            height={96}
          />
        </a>
      </main>
    </div>
  )
}
