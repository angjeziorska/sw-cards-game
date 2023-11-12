import type { Game } from "../shared/types";

export async function getCards(): Promise<Game> {
  const results = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: `
      query GetCards {
        cards {
          person {
            id
            height
            name
            mass
          }
          starship {
            id
            crew
            name
            passengers
          }
        }
      }      
        `,
    }),
  });
  const cards = await results.json();
  return cards.data.cards;
}
