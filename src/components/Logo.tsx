import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
}

export function Logo({ variant = 'dark' }: LogoProps) {
  const logoSrc = variant === 'light' ? '/logowrite.png' : '/logo.png';

  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
    >
      <div className="relative h-16 w-56">
        <Image
          src={logoSrc}
          alt="Love Clothes & Shoes Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
