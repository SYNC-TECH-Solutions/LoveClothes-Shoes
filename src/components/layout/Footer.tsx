
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
            {...props}
        >
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.01 1.59-.02 3.18-.01 4.77-1.13 1.02-2.34 1.96-3.64 2.81-.05 1.84-.06 3.68-.04 5.53l-4.11-.01c.02-1.84.01-3.68.04-5.52-1.31-.87-2.58-1.8-3.8-2.79-.01 1.55.01 3.1-.01 4.65l-4.11-.01c.02-1.83.01-3.67.04-5.51 1.32-.86 2.58-1.78 3.82-2.75.02-1.56.01-3.12.01-4.67-1.47.64-2.99.94-4.56 1.01v-4.03c1.44-.17 2.87-.67 4.1-1.65.78-1.21 1.25-2.64 1.4-4.16.09-.08.18-.17.27-.25z" />
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
