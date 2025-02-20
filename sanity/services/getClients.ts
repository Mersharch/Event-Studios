import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export const getClients = async () => {
  const ALL_CLIENTS = defineQuery(`
        *[
            _type == "client"
        ]
| order(name asc){
          _id,
          name,
          image{
              asset{
                _ref
              }
            },
            slug{
            current
          }
        }
        `);

  try {
    const clients = await sanityFetch({ query: ALL_CLIENTS });
    return clients.data || [];
  } catch (error) {
    console.log("Error fetching clients  ", error);
    return [];
  }
};
