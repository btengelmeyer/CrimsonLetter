import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const HERO_IMAGE =
  "https://pedagog.ai/wp-content/uploads/sites/3/2023/10/DALL%C2%B7E-2023-10-27-14.47.57-Photo-of-a-young-African-female-student-wearing-glasses-and-a-blue-backpack-sitting-at-a-wooden-desk-with-a-textbook-opened-in-front-of-her.-Beside-h.png";

const PARAGRAPHS = [
  `Remember when you had your "first drink" with your parents and you had to force that "shit, never tasted anything like that before" wince? Point is, we've all pretended that the cat never made it out the bag, or that the toothpaste never got squeezed out the tube. The oopsies happen. They have to.`,
  `But to pretend that the capstone creed wasn't already getting it's shit bent over every day of the week and twice on Sunday before AI came around is just naive. Now it's a whole new ball game, coach.`,
  `If you've ever taken an alcohol awareness class through UA (heard about this from a friend), then you know the preacher ain't preachin "don't drink." In fact, the tune is much closer to "just don't rip a screamin' piss off the 'ders curb all over UAPD's shiny black boots." Same surely goes for UA's "AI Readiness Initiative," developed to "build AI fluency."`,
  `Let me cut to the chase: everyone's fucking using AI already. Even I fucking know how to use AI and I never use it for anything. Except school. So maybe I will take the class, for kicks, for journalistic purposes. I mean it's not so far off from: "UA Launches Duolingo initiative for Foreign Language Majors." You're already paying the fucking professors (I hope) to teach (I hope again) the classes. It's beyond me.`,
  `At least we continue to stay at the forefront unlike any other institution. Not sure how many other schools rolled out those classes on pill popping or brother hazing before the Capstone did, but Roll Mother Fucking Tide, baby, Roll Mother Fucking Tide.`,
];

export default function AiFluencyArticle() {
  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-zinc-950">
      <Navbar />

      <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-10">
        <nav className="mb-8 text-sm font-semibold uppercase tracking-widest text-crimson dark:text-crimson-light">
          <Link href="/" className="hover:underline">
            &larr; Back to Home
          </Link>
        </nav>

        <article>
          <header className="border-b border-zinc-200 pb-8 dark:border-zinc-800">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson dark:text-crimson-light">
              Campus &middot; Satire
            </p>
            <h1 className="mt-3 font-serif text-3xl font-black leading-tight tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl lg:text-5xl">
              Study Finds 98% of Finals Completed with AI Assistance,
              Administrators Roll Out &ldquo;AI Fluency&rdquo; Courses in
              Response
            </h1>
            <p className="mt-4 font-serif text-xl italic text-zinc-600 dark:text-zinc-400">
              Students Wondering: Can you ChatGPT it?
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                By Staff Correspondent
              </span>
              <span aria-hidden="true">&bull;</span>
              <time dateTime="2026-06-02">June 2, 2026</time>
            </div>
          </header>

          <figure className="my-8">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={HERO_IMAGE}
                alt="A student at a wooden desk with an open textbook"
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              The Capstone&rsquo;s new &ldquo;AI Readiness Initiative&rdquo;
              arrives just in time for finals season.
            </figcaption>
          </figure>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-300">
            {PARAGRAPHS.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-7xl first-letter:font-black first-letter:leading-[0.8] first-letter:text-crimson dark:first-letter:text-crimson-light"
                    : undefined
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <hr className="my-10 border-zinc-200 dark:border-zinc-800" />

        <Link
          href="/"
          className="inline-block text-sm font-semibold uppercase tracking-widest text-crimson hover:underline dark:text-crimson-light"
        >
          &larr; More from The Crimson Letter
        </Link>
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-2xl px-5 py-8 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="font-serif text-lg font-bold text-crimson dark:text-crimson-light">
            The Crimson Letter
          </span>{" "}
          &mdash; A satirical publication. Roll Tide.
        </div>
      </footer>
    </div>
  );
}
