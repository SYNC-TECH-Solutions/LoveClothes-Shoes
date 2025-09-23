
import type { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Love Clothes & Shoes team. We\'d love to hear from you with questions, comments, or collaboration ideas.',
};

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container max-w-4xl py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Get In Touch</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                Have a question, a comment, or a collaboration idea? We'd love to hear from you.
            </p>
        </div>

        <Card className="max-w-xl mx-auto p-4 md:p-8 bg-card shadow-lg">
          <ContactForm />
        </Card>
      </div>
    </div>
  );
}
