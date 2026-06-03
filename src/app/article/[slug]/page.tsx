import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import { SIDE_ARTICLES, getArticle } from "@/app/lib/articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return SIDE_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "The Crimson Letter" };
  return {
    title: `${article.headline} | The Crimson Letter`,
    description: article.snippet,
  };
}

export default async function StubArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

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
              {article.section} &middot; Satire
            </p>
            <h1 className="mt-3 font-serif text-3xl font-black leading-tight tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl lg:text-5xl">
              {article.headline}
            </h1>
            <p className="mt-4 font-serif text-xl italic text-zinc-600 dark:text-zinc-400">
              {article.snippet}
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
                src="/placeholder.svg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
            </div>
          </figure>

          <div className="rounded-md border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center dark:border-zinc-700 dark:bg-zinc-900">
            <p className="font-serif text-lg font-bold text-zinc-900 dark:text-zinc-100">
              This story is still developing.
            </p>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Our correspondent is currently fact-checking the unfact-checkable.
              Full coverage of &ldquo;{article.headline}&rdquo; is coming soon.
            </p>
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
