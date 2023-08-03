import Image from 'next/image'
import Navigation from './navigation'

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center p-8">
        <a href="https://apps.apple.com/us/app/the-ultmt-app/id6452383295">
          <Image
            src="./app-store.svg"
            alt="Download on the App Store"
            width={400}
            height={96}
          />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.ultmtapp">
          <img
            alt="Get it on Google Play"
            src="./play-store.png"
            width={458}
            height={96}
          />
        </a>
      </main>
    </div>
  )
}
