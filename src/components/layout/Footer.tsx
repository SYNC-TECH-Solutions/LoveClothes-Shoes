
'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import { subscribeToNewsletter } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const newsletterFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
});

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M21 4H3v16h18V4z" fill="none" />
            <path d="M12.4 7.8c-1.5-.1-2.9.4-4.1 1.4v6.8h2.9V9.9c0-1.2 1-2.2 2.2-2.2.5 0 1 .2 1.4.5V5.1c-.4-.2-.9-.4-1.4-.3z" />
            <path d="M15.4 9.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8.8 1.8 1.8 1.8 1.8-.8 1.8-1.8z" />
            <path d="M12.5 16.1c-1.6 0-3-1.3-3-3s1.3-3 3-3 .9.2 1.6.6V5.1C13.2 5 12.3 5.3 12.5 7c.8-.5 1.8-.8 2.8-.8 2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1-5.1-2.3-5.1-5.1h2.9c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2-.9-2.1-2.2-2.1c-.6 0-1.1.2-1.5.6v2.9h-2.9v-4c0-.9.7-1.6 1.6-1.6.8 0 1.5.5 1.5 1.3v.1h2.9V9.1c0-2.8-2.3-5.1-5.1-5.1S7.4 6.3 7.4 9.1c0 2.4 1.7 4.4 4 5 .2-1.1.8-2 1.5-2.6-1-.5-2.2-.8-3.4-.8-2.8 0-5.1 2.3-5.1 5.1S8.7 21 11.5 21s5.1-2.3 5.1-5.1v-2.9c-.9.7-2.1 1.1-3.3 1.1z" fill="none"/>
            <path d="M12.55 5.15A6.85 6.85 0 0 0 7.1 9.3v5.55h2.8V9.3a3.9 3.9 0 0 1 3.9-3.9c.7 0 1.4.2 2 .5V2.85c-.6-.3-1.3-.5-2-.5a6.85 6.85 0 0 0-1.25.1z"/>
            <path d="M12.55 12.25a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z"/>
        </svg>
    )
}

export function Footer() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof newsletterFormSchema>>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof newsletterFormSchema>) {
    const result = await subscribeToNewsletter(values.email);
    if (result.success) {
      toast({
        title: "Subscribed!",
        description: "Thanks for joining our newsletter. Look out for great things in your inbox.",
      });
      form.reset();
    } else {
       toast({
        variant: "destructive",
        title: "Oops!",
        description: result.message || "Something went wrong.",
      });
    }
  }

  return (
    <footer className="w-full border-t border-border/40 bg-background/95 py-12">
      <div className="container grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex flex-col gap-4 md:col-span-1">
          <Logo />
          <p className="text-sm text-foreground/60">
            Your curated guide to the best in style. We earn a commission on qualifying purchases.
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                    <TikTokIcon className="h-5 w-5" />
                    <span className="sr-only">TikTok</span>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter X</span>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                </Link>
            </Button>
             <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
          <div>
            <h4 className="font-headline font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/#new-arrivals" className="text-sm text-foreground/60 hover:text-foreground">New Arrivals</Link></li>
              <li><Link href="/#women" className="text-sm text-foreground/60 hover:text-foreground">Women</Link></li>
              <li><Link href="/#men" className="text-sm text-foreground/60 hover:text-foreground">Men</Link></li>
              <li><Link href="/#sale" className="text-sm text-foreground/60 hover:text-foreground">Sale</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-foreground/60 hover:text-foreground">About Us</Link></li>
              <li><Link href="/sustainability" className="text-sm text-foreground/60 hover:text-foreground">Sustainability</Link></li>
              <li><Link href="/careers" className="text-sm text-foreground/60 hover:text-foreground">Careers</Link></li>
              <li><Link href="/press" className="text-sm text-foreground/60 hover:text-foreground">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-sm text-foreground/60 hover:text-foreground">Contact</Link></li>
              <li><Link href="/faq" className="text-sm text-foreground/60 hover:text-foreground">FAQ</Link></li>
              <li><Link href="/shipping" className="text-sm text-foreground/60 hover:text-foreground">Shipping</Link></li>
              <li><Link href="/returns" className="text-sm text-foreground/60 hover:text-foreground">Returns</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-headline font-semibold">Join Our Newsletter</h4>
          <p className="text-sm text-foreground/60">Get 10% off your first order.</p>
           <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full max-w-sm items-start space-x-2">
               <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input type="email" placeholder="Email" className="bg-card" {...field}/>
                    </FormControl>
                    <FormMessage className="text-xs pt-1"/>
                  </FormItem>
                )}
              />
              <Button type="submit" variant="default" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? '...' : 'Subscribe'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 pt-8 border-t border-border/40 text-center text-sm text-foreground/60">
        <p>&copy; {new Date().getFullYear()} Love Clothes & Shoes. All rights reserved.</p>
        <p>Built by <a href="https://www.synctech.ie" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline">SYNC TECH</a></p>
      </div>
    </footer>
  );
}
