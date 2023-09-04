import Image from 'next/image'
import Navigation from './navigation'

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center space-y-4 p-8">
        <a href="https://apps.apple.com/us/app/the-ultmt-app/id6452383295" data-testid="app-store">
          <Image
            src="/app-store.svg"
            alt="Download on the App Store"
            width={400}
            height={96}
          />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.ultmtapp" data-testid="google-play">
          <Image
            src="/play-store.png"
            alt="Get it on Google Play"
            width={400}
            height={96}
          />
        </a>
        <a
          href="https://www.buymeacoffee.com/theultmtapp"
          target="_blank"
          className="bg-ultmtyellow text-darkgray p-1 flex flex-row rounded-md"
          data-testid="bmc-button"
        >
          <Image
            src="/bmc-logo.svg"
            alt="Buy me a coffee logo"
            width={20}
            height={20}
            className="px-1"
          />
          Buy me a&nbsp;<s>coffee</s>&nbsp;disc
        </a>
      </main>
    </div>
  )
}
