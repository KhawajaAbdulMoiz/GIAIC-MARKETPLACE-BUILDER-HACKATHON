// import createImageUrlBuilder from '@sanity/image-url';

import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

function createImageUrlBuilder(arg0: { projectId: string; dataset: string; }) {
  throw new Error("Function not implemented.");
}

