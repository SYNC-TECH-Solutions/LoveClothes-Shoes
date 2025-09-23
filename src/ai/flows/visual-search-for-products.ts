'use server';
/**
 * @fileOverview Implements a visual search flow to find similar products in the Love Clothes & Shoes inventory.
 *
 * - visualSearchForProducts - A function that takes an image data URI and searches for similar products.
 * - VisualSearchForProductsInput - The input type for the visualSearchForProducts function.
 * - VisualSearchForProductsOutput - The return type for the visualSearchForProducts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VisualSearchForProductsInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a clothing item or style, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type VisualSearchForProductsInput = z.infer<
  typeof VisualSearchForProductsInputSchema
>;

const VisualSearchForProductsOutputSchema = z.object({
  productMatches: z
    .array(z.string())
    .describe('An array of product IDs that are visually similar.'),
});
export type VisualSearchForProductsOutput = z.infer<
  typeof VisualSearchForProductsOutputSchema
>;

export async function visualSearchForProducts(
  input: VisualSearchForProductsInput
): Promise<VisualSearchForProductsOutput> {
  return visualSearchForProductsFlow(input);
}

const visualSearchForProductsPrompt = ai.definePrompt({
  name: 'visualSearchForProductsPrompt',
  input: {schema: VisualSearchForProductsInputSchema},
  output: {schema: VisualSearchForProductsOutputSchema},
  prompt: `You are an AI assistant designed to find visually similar products in an online store.

  Given an image of a clothing item, identify visually similar products from the Love Clothes & Shoes inventory.
  Return a list of product IDs that match the visual characteristics of the item in the image.

  Image: {{media url=photoDataUri}}
  `,
});

const visualSearchForProductsFlow = ai.defineFlow(
  {
    name: 'visualSearchForProductsFlow',
    inputSchema: VisualSearchForProductsInputSchema,
    outputSchema: VisualSearchForProductsOutputSchema,
  },
  async input => {
    const {output} = await visualSearchForProductsPrompt(input);
    return output!;
  }
);
