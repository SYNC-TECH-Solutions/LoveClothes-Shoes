// src/ai/flows/ai-powered-product-recommendations.ts
'use server';
/**
 * @fileOverview AI-powered product recommendations flow.
 *
 * This file defines a Genkit flow that provides personalized product recommendations
 * based on user browsing history and preferences.
 *
 * @exports {getProductRecommendations} - The main function to get product recommendations.
 * @exports {ProductRecommendationsInput} - The input type for the getProductRecommendations function.
 * @exports {ProductRecommendationsOutput} - The output type for the getProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the product recommendations flow
const ProductRecommendationsInputSchema = z.object({
  userHistory: z
    .string()
    .describe(
      'A comma separated list of product IDs representing the users past interactions.'
    ),
  userPreferences: z
    .string()
    .describe(
      'A comma separated list of style preferences that the user likes, such as colors or styles.'
    ),
});

export type ProductRecommendationsInput = z.infer<
  typeof ProductRecommendationsInputSchema
>;

// Define the output schema for the product recommendations flow
const ProductRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe(
      'A comma separated list of product IDs representing the recommended items.'
    ),
});

export type ProductRecommendationsOutput = z.infer<
  typeof ProductRecommendationsOutputSchema
>;

// Exported function to get product recommendations
export async function getProductRecommendations(
  input: ProductRecommendationsInput
): Promise<ProductRecommendationsOutput> {
  return productRecommendationsFlow(input);
}

// Define the prompt for generating product recommendations
const productRecommendationsPrompt = ai.definePrompt({
  name: 'productRecommendationsPrompt',
  input: {schema: ProductRecommendationsInputSchema},
  output: {schema: ProductRecommendationsOutputSchema},
  prompt: `You are an e-commerce assistant that generates product recommendations based on user history and preferences.

  User History: {{{userHistory}}}
  User Preferences: {{{userPreferences}}}

  Based on this information, generate a comma separated list of product IDs that would be of interest to the user.
  Do not include any extra explanation. Only include the comma separated list.

  Recommendations:`,
});

// Define the Genkit flow for product recommendations
const productRecommendationsFlow = ai.defineFlow(
  {
    name: 'productRecommendationsFlow',
    inputSchema: ProductRecommendationsInputSchema,
    outputSchema: ProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await productRecommendationsPrompt(input);
    return output!;
  }
);
