import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
    >
      <div className="relative h-10 w-40 md:h-12 md:w-48">
        <Image
          src="/logowrite.png"
          alt="Love Clothes & Shoes Logo"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 160px, 192px"
        />
      </div>
    </Link>
  );
}
