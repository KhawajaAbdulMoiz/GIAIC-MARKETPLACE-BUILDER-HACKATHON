
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",       
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token:process.env.SANITY_API_TOKEN || 'skLccAvpl4urQgcGq2gTutgbklAFxjEZBLYht2DR5oOVCv0lmLSDzOGgDriyZ5MscBsOIRTt5FQCHgjKK8IjHPMIdkfr3tCY4GoO33xhlgAvLKV6HgosJcrluXLfGbCjJff1iDS2nrDX2ZVCnY47xdHDONbiEiPjCGj3F9nChxsOwuTL4uXO',
  useCdn: false,  
  
});


