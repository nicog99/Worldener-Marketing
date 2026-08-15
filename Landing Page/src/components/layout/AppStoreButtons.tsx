import { Link } from 'react-router-dom'
import { APP_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

type AppStoreButtonsProps = {
  className?: string
  variant?: 'dark' | 'light' | 'onYellow'
  layout?: 'row' | 'column'
}

const storeButtonClass = {
  dark: {
    apple: 'bg-primary text-heading',
    play: 'border border-heading/20 bg-white text-heading',
  },
  light: {
    apple: 'border border-white/30 bg-white text-heading',
    play: 'border border-white/30 bg-transparent text-white',
  },
  onYellow: {
    apple: 'bg-dark text-white',
    play: 'border border-heading/20 bg-white text-heading',
  },
} as const

export function AppStoreButtons({
  className,
  variant = 'dark',
  layout = 'row',
}: AppStoreButtonsProps) {
  const styles = storeButtonClass[variant]

  return (
    <div
      className={cn(
        'flex gap-3',
        layout === 'column' ? 'flex-col' : 'flex-wrap',
        className,
      )}
    >
      <a
        href={APP_LINKS.appStore}
        aria-label="Download on the App Store (link coming soon)"
        className={cn(
          'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90',
          styles.apple,
        )}
        style={{ fontFamily: 'var(--font-heading)' }}
        onClick={(e) => {
          if (APP_LINKS.appStore === '#') e.preventDefault()
        }}
      >
        <img
          src={
            variant === 'onYellow'
              ? '/icons/apple-logo-white.png'
              : '/icons/apple-logo-black.png'
          }
          alt=""
          className="h-5 w-5 object-contain"
        />
        App Store
      </a>
      <a
        href={APP_LINKS.googlePlay}
        aria-label="Get it on Google Play (link coming soon)"
        className={cn(
          'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90',
          styles.play,
        )}
        style={{ fontFamily: 'var(--font-heading)' }}
        onClick={(e) => {
          if (APP_LINKS.googlePlay === '#') e.preventDefault()
        }}
      >
        <img src="/icons/playstore.png" alt="" className="h-5 w-5 object-contain" />
        Google Play
      </a>
    </div>
  )
}

export function AppStoreButtonsLight(props: Omit<AppStoreButtonsProps, 'variant'>) {
  return <AppStoreButtons {...props} variant="light" />
}

export function FooterAppLinks() {
  return (
    <div className="flex gap-4">
      <Link to="/#download">
        <img
          src="/icons/apple-logo-white.png"
          alt="App Store"
          className="h-8 w-8 object-contain opacity-80 hover:opacity-100"
        />
      </Link>
      <Link to="/#download">
        <img
          src="/icons/playstore.png"
          alt="Google Play"
          className="h-8 w-8 object-contain opacity-80 hover:opacity-100"
        />
      </Link>
    </div>
  )
}
