import { Link } from 'react-router-dom'
import { APP_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

type AppStoreButtonsProps = {
  className?: string
  variant?: 'dark' | 'light'
  layout?: 'row' | 'column'
}

export function AppStoreButtons({
  className,
  variant = 'dark',
  layout = 'row',
}: AppStoreButtonsProps) {
  const isDark = variant === 'dark'

  return (
    <div
      className={cn(
        'flex gap-3',
        layout === 'column' ? 'flex-col' : 'flex-wrap',
        className,
      )}
      id="download"
    >
      <a
        href={APP_LINKS.appStore}
        aria-label="Download on the App Store (link coming soon)"
        className={cn(
          'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90',
          isDark
            ? 'bg-primary text-heading'
            : 'border border-white/30 bg-white text-heading',
        )}
        style={{ fontFamily: 'var(--font-heading)' }}
        onClick={(e) => {
          if (APP_LINKS.appStore === '#') e.preventDefault()
        }}
      >
        <img src="/images/apple.png" alt="" className="h-5 w-5" />
        App Store
      </a>
      <a
        href={APP_LINKS.googlePlay}
        aria-label="Get it on Google Play (link coming soon)"
        className={cn(
          'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90',
          isDark
            ? 'border border-heading/20 bg-white text-heading'
            : 'border border-white/30 bg-transparent text-white',
        )}
        style={{ fontFamily: 'var(--font-heading)' }}
        onClick={(e) => {
          if (APP_LINKS.googlePlay === '#') e.preventDefault()
        }}
      >
        <img src="/images/playstore.png" alt="" className="h-5 w-5" />
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
        <img src="/images/apple.png" alt="App Store" className="h-8 w-8 opacity-80 hover:opacity-100" />
      </Link>
      <Link to="/#download">
        <img src="/images/playstore.png" alt="Google Play" className="h-8 w-8 opacity-80 hover:opacity-100" />
      </Link>
    </div>
  )
}
