import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Github, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 py-12">
      <div className="container grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex flex-col gap-4 md:col-span-1">
          <Logo />
          <p className="text-sm text-foreground/60">
            Your style, your story. Find it here.
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
          <div>
            <h4 className="font-headline font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Women</Link></li>
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Men</Link></li>
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">New Arrivals</Link></li>
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Sale</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">About Us</Link></li>
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Sustainability</Link></li>
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Careers</Link></li>
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Contact</Link></li>
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">FAQ</Link></li>
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Shipping</Link></li>
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Returns</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-headline font-semibold">Join Our Newsletter</h4>
          <p className="text-sm text-foreground/60">Get 10% off your first order.</p>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" className="bg-card"/>
            <Button type="submit" variant="default">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 pt-8 border-t border-border/40 text-center text-sm text-foreground/60">
        <p>&copy; {new Date().getFullYear()} Style Heart. All rights reserved.</p>
      </div>
    </footer>
  );
}
