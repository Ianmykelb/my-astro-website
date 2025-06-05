import { createClient } from "contentful";

export const client = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

// Fetch homepage entry (and linked features)
export async function getHomepage() {
  const entries = await client.getEntries({
    content_type: "homepage", // <-- use your Content Type ID here, check in Contentful!
    include: 2, // follow references (for features, images, etc.)
  });
  return entries.items[0]?.fields;
}
