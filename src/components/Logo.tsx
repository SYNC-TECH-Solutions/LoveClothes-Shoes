import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
    >
      <div className="relative h-12 w-48 md:h-16 md:w-56">
        <Image
          src="/logo.png"
          alt="Love Clothes & Shoes Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
