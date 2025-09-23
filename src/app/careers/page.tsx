import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';

export default function CareersPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container max-w-4xl py-12 md:py-16 lg:py-20 text-center">
        <Briefcase className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Join Our Team</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          We're a passionate team of fashion enthusiasts, tech innovators, and creative minds dedicated to changing the way people discover and shop for style. While we may be an affiliate platform, our vision is big.
        </p>

        <div className="mt-12 text-left bg-card p-8 rounded-lg shadow-sm">
            <h2 className="font-headline text-3xl font-semibold mb-6">Current Openings</h2>
            <div className="space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h3 className="text-xl font-semibold text-primary">Fashion Content Curator</h3>
                        <p className="text-foreground/60">Remote | Full-time</p>
                    </div>
                    <Button variant="outline" className="mt-4 md:mt-0">Apply Now</Button>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h3 className="text-xl font-semibold text-primary">Digital Marketing Specialist (SEO/PPC)</h3>
                        <p className="text-foreground/60">Remote | Part-time</p>
                    </div>
                    <Button variant="outline" className="mt-4 md:mt-0">Apply Now</Button>
                </div>
            </div>
            <div className="mt-10 text-center">
                <p className="text-foreground/70">Don't see a role that fits? We're always looking for talented people.</p>
                <Button className="mt-4">Get In Touch</Button>
            </div>
        </div>
      </div>
    </div>
  );
}
