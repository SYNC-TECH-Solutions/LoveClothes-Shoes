import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
    >
      <div className="relative h-8 w-8">
        <svg
          className="h-full w-full text-primary"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="currentColor"
            fillOpacity="0.2"
          />
          <path
            d="M16.5 3C14.76 3 13.09 3.81 12 5.09 10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 2.13 1.21 4.25 3.31 6.23.48.45 1.94 1.82 2.33 2.22.25.26.52.53.81.82l.02.02.26.26.83.83.2.2.19.19.26.25.26-.25.19-.19.2-.2.83-.83.26-.26.02-.02.81-.82c.39-.4 1.85-1.77 2.33-2.22C20.79 12.75 22 10.63 22 8.5 22 5.42 19.58 3 16.5 3zm-9 6.5c-1.29 0-2.5-.52-2.5-2.5s1.21-2.5 2.5-2.5v5z"
            transform="translate(-1, 0.5) scale(0.65)"
            transform-origin="center"
          />
          <path
            fill="currentColor"
            d="M16.62,13.2a.8.8,0,0,1-.55.22.82.82,0,0,1-.55-.22L13.1,10.74,10.68,13.2a.82.82,0,0,1-.55.22.8.8,0,0,1-.55-.22.79.79,0,0,1,0-1.13l2.42-2.46-2.42-2.46a.79.79,0,0,1,0-1.13.8.8,0,0,1,1.1,0L13.1,8.48l2.42-2.46a.8.8,0,0,1,1.1,0,.79.79,0,0,1,0,1.13L14.2,8.48l2.42,2.46A.79.79,0,0,1,16.62,13.2Z"
            transform="translate(-6.5, 4.5) rotate(45) scale(0.3)"
            transform-origin="center"
          />
        </svg>
      </div>
      <span className="font-headline text-xl font-bold tracking-tight">
        Love Clothes & Shoes
      </span>
    </Link>
  );
}
