import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

const SIDE_ARTICLES = [
  {
    section: "Business",
    headline:
      "MIS Department Discovers New Way to Use Spreadsheets for Emotional Suppression",
  },
  {
    section: "Culture",
    headline:
      'Local Student Brings Vintage 2008 Camcorder to Party, Claims it is "Aesthetic"',
  },
  {
    section: "Nightlife",
    headline:
      "Tuscaloosa Bartender Invents Cocktail That Erases Memories of Midterms",
  },
  {
    section: "Campus",
    headline:
      'Group Project Member Promises to "Start Contributing Tonight" for 14th Consecutive Day',
  },
  {
    section: "Academics",
    headline:
      "Guy in Front Row Asks Question That is Actually Just a 5-Minute Opinion",
  },
  {
    section: "Finance",
    headline: "Campus Parking Ticket Revenue Now Exceeds State GDP",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <Link
          href="/article/ai-fluency"
          className="group block border-b border-zinc-200 pb-10"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson">
            Top Story
          </p>
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md bg-zinc-100">
              <Image
                src="/placeholder.svg"
                alt="Students completing finals with AI assistance"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div>
              <h1 className="font-serif text-3xl font-black leading-tight tracking-tight text-zinc-900 group-hover:text-crimson sm:text-4xl lg:text-5xl">
                Study Finds 98% of Finals Completed with AI Assistance,
                Administrators Roll Out &ldquo;AI Fluency&rdquo; Courses in
                Response
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                Students Wondering: Can you ChatGPT it? As the Capstone unveils
                its &ldquo;AI Readiness Initiative,&rdquo; one reporter
                investigates whether anyone actually needs the class&mdash;and
                why everyone&rsquo;s signing up anyway.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold uppercase tracking-widest text-crimson">
                Read the full story &rarr;
              </span>
            </div>
          </div>
        </Link>

        <section className="mt-10">
          <h2 className="mb-6 font-serif text-2xl font-bold tracking-tight text-zinc-900">
            More from the Capstone
          </h2>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {SIDE_ARTICLES.map((article) => (
              <article key={article.headline} className="group flex flex-col">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md bg-zinc-100">
                  <Image
                    src="/placeholder.svg"
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-crimson">
                  {article.section}
                </p>
                <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-zinc-900 group-hover:text-crimson">
                  {article.headline}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  Continue reading this developing story from the desk of The
                  Crimson Letter.
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500">
          <span className="font-serif text-lg font-bold text-crimson">
            The Crimson Letter
          </span>{" "}
          &mdash; A satirical publication. Roll Tide.
        </div>
      </footer>
    </div>
  );
}
