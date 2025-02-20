import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export const getFeatured = async () => {
  const ALL_FEATURED = defineQuery(`
       *[
            _type == "gallery" && isFeatured == true
        ]
        | order(name asc){
            name,
            mainImage{
              asset{
                _ref
              }
            },
            isFeatured
        }
        `);

  try {
    const featured = await sanityFetch({ query: ALL_FEATURED });
    return featured.data || [];
  } catch (error) {
    console.log("Error fetching featured posts  ", error);
    return [];
  }
};
