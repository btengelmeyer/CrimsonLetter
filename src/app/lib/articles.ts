export type Article = {
  slug: string;
  section: string;
  headline: string;
  snippet: string;
};

export const SIDE_ARTICLES: Article[] = [
  {
    slug: "mis-spreadsheets-emotional-suppression",
    section: "Business",
    headline:
      "MIS Department Discovers New Way to Use Spreadsheets for Emotional Suppression",
    snippet:
      "Researchers confirm that a sufficiently nested VLOOKUP can, in fact, hold back tears through midterms.",
  },
  {
    slug: "vintage-camcorder-aesthetic",
    section: "Culture",
    headline:
      'Local Student Brings Vintage 2008 Camcorder to Party, Claims it is "Aesthetic"',
    snippet:
      "Witnesses report the device has no memory card, no charger, and no discernible purpose beyond the bit.",
  },
  {
    slug: "cocktail-erases-midterms",
    section: "Nightlife",
    headline:
      "Tuscaloosa Bartender Invents Cocktail That Erases Memories of Midterms",
    snippet:
      "Side effects may include forgetting the cocktail, the bar, and your 8 a.m. lecture entirely.",
  },
  {
    slug: "group-project-contributing-tonight",
    section: "Campus",
    headline:
      'Group Project Member Promises to "Start Contributing Tonight" for 14th Consecutive Day',
    snippet:
      "Teammates remain cautiously skeptical as the shared doc shows zero edits and one passive-aggressive comment.",
  },
  {
    slug: "front-row-five-minute-opinion",
    section: "Academics",
    headline:
      "Guy in Front Row Asks Question That is Actually Just a 5-Minute Opinion",
    snippet:
      "The professor confirms it was, technically, neither a question nor relevant to the lecture.",
  },
  {
    slug: "parking-revenue-exceeds-gdp",
    section: "Finance",
    headline: "Campus Parking Ticket Revenue Now Exceeds State GDP",
    snippet:
      "Economists warn the university may soon be too big to fail, and too booted to drive away.",
  },
];

export function getArticle(slug: string): Article | undefined {
  return SIDE_ARTICLES.find((article) => article.slug === slug);
}
