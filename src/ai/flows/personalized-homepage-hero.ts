'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating personalized homepage hero content.
 *
 * The flow takes user preferences and a product catalog as input and generates a captivating headline and image URL for the homepage hero section.
 * @param {PersonalizedHomepageHeroInput} input - The input to the flow, including user preferences and product catalog.
 * @returns {Promise<PersonalizedHomepageHeroOutput>} - A promise that resolves to the generated hero content.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedHomepageHeroInputSchema = z.object({
  userPreferences: z
    .string()
    .describe("A description of the user's style preferences."),
  productCatalog: z
    .string()
    .describe('A summary of the available product catalog.'),
});
export type PersonalizedHomepageHeroInput = z.infer<
  typeof PersonalizedHomepageHeroInputSchema
>;

const PersonalizedHomepageHeroOutputSchema = z.object({
  headline: z
    .string()
    .describe('A captivating headline personalized for the user.'),
  imageUrl: z
    .string()
    .describe('URL of a lifestyle image relevant to the user.'),
});
export type PersonalizedHomepageHeroOutput = z.infer<
  typeof PersonalizedHomepageHeroOutputSchema
>;

export async function generatePersonalizedHero(
  input: PersonalizedHomepageHeroInput
): Promise<PersonalizedHomepageHeroOutput> {
  return personalizedHomepageHeroFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedHomepageHeroPrompt',
  input: {
    schema: PersonalizedHomepageHeroInputSchema,
  },
  output: {
    schema: PersonalizedHomepageHeroOutputSchema,
  },
  prompt: `You are an expert marketing copywriter for Love Clothes & Shoes, an online clothing and shoe store.

  Based on the user's preferences and the available product catalog, generate a captivating headline and select a relevant lifestyle image URL for the homepage hero section.

  User Preferences: {{{userPreferences}}}
  Product Catalog: {{{productCatalog}}}

  The imageUrl MUST be a placeholder from 'https://picsum.photos/'. For example: 'https://picsum.photos/seed/1/1200/800'.
  Ensure the headline is concise and engaging, and the image URL reflects the user's style and current trends.
  The headline and image should make the user feel excited and want to explore more.

  Return the headline and image URL in the format specified in the output schema.
  `,
});

const personalizedHomepageHeroFlow = ai.defineFlow(
  {
    name: 'personalizedHomepageHeroFlow',
    inputSchema: PersonalizedHomepageHeroInputSchema,
    outputSchema: PersonalizedHomepageHeroOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
