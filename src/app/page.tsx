import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { SIDE_ARTICLES } from "@/app/lib/articles";

const TOP_STORY_IMAGE =
  "https://pedagog.ai/wp-content/uploads/sites/3/2023/10/DALL%C2%B7E-2023-10-27-14.47.57-Photo-of-a-young-African-female-student-wearing-glasses-and-a-blue-backpack-sitting-at-a-wooden-desk-with-a-textbook-opened-in-front-of-her.-Beside-h.png";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-zinc-950">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <Link
          href="/article/ai-fluency"
          className="group block border-b border-zinc-200 pb-10 dark:border-zinc-800"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson dark:text-crimson-light">
            Top Story
          </p>
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={TOP_STORY_IMAGE}
                alt="Students completing finals with AI assistance"
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div>
              <h1 className="font-serif text-3xl font-black leading-tight tracking-tight text-zinc-900 group-hover:text-crimson dark:text-zinc-100 dark:group-hover:text-crimson-light sm:text-4xl lg:text-5xl">
                Study Finds 98% of Finals Completed with AI Assistance,
                Administrators Roll Out &ldquo;AI Fluency&rdquo; Courses in
                Response
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                Students Wondering: Can you ChatGPT it? As the Capstone unveils
                its &ldquo;AI Readiness Initiative,&rdquo; one reporter
                investigates whether anyone actually needs the class&mdash;and
                why everyone&rsquo;s signing up anyway.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold uppercase tracking-widest text-crimson dark:text-crimson-light">
                Read the full story &rarr;
              </span>
            </div>
          </div>
        </Link>

        <section className="mt-10">
          <h2 className="mb-6 font-serif text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            More from the Capstone
          </h2>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {SIDE_ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/article/${article.slug}`}
                className="group flex flex-col"
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src="/placeholder.svg"
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-crimson dark:text-crimson-light">
                  {article.section}
                </p>
                <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-zinc-900 group-hover:text-crimson dark:text-zinc-100 dark:group-hover:text-crimson-light">
                  {article.headline}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {article.snippet}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="font-serif text-lg font-bold text-crimson dark:text-crimson-light">
            The Crimson Letter
          </span>{" "}
          &mdash; A satirical publication. Roll Tide.
        </div>
      </footer>
    </div>
  );
}
