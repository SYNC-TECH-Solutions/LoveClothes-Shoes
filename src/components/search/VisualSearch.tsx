'use client';
import { useState, useRef, type ChangeEvent } from 'react';
import { Search, Upload, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
  SheetFooter,
} from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';
import { findSimilarProducts } from '@/app/actions';
import type { Product } from '@/lib/types';
import ProductGrid from '../products/ProductGrid';
import Image from 'next/image';

export default function VisualSearch() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setResults([]);
      setError(null);
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSearch = async () => {
    if (!preview) return;

    setIsLoading(true);
    setError(null);
    setResults([]);

    try {
      const foundProducts = await findSimilarProducts(preview);
      setResults(foundProducts);
      if(foundProducts.length === 0) {
        toast({
            title: "No similar products found",
            description: "Try a different image for better results.",
        });
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      toast({
        variant: 'destructive',
        title: 'Search Failed',
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setResults([]);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
          <span className="sr-only">Visual Search</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="font-headline text-2xl">Visual Search</SheetTitle>
          <SheetDescription>
            Upload a photo to find similar items in our catalog.
          </SheetDescription>
        </SheetHeader>
        <div className="py-8 space-y-6">
          {!preview && (
            <div
              className="flex justify-center items-center w-full"
              onClick={() => fileInputRef.current?.click()}
            >
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-secondary"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-4 text-foreground/60" />
                  <p className="mb-2 text-sm text-foreground/60">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-foreground/60">
                    PNG, JPG, or WEBP
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/png, image/jpeg, image/webp"
                />
              </label>
            </div>
          )}

          {preview && (
            <div className="space-y-4">
              <div className="relative w-48 h-48 mx-auto rounded-lg overflow-hidden border">
                <Image src={preview} alt="Image preview" fill className="object-contain" />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-1 right-1 h-7 w-7"
                  onClick={handleReset}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <Button onClick={handleSearch} disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Searching...
                  </>
                ) : (
                  'Find Similar Items'
                )}
              </Button>
            </div>
          )}

          {isLoading && (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {error && <p className="text-destructive text-center">{error}</p>}
          
          {results.length > 0 && (
            <div>
              <h3 className="font-headline text-xl font-semibold mb-4 text-center">Matching Styles</h3>
              <ProductGrid products={results} />
            </div>
          )}
        </div>
        <SheetFooter>
            {/* Footer can be used for actions if needed later */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
