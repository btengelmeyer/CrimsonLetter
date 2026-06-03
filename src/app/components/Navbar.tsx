import Link from "next/link";

const NAV_LINKS = [
  { label: "News", href: "/" },
  { label: "Opinion", href: "/" },
  { label: "Culture", href: "/" },
  { label: "Sports", href: "/" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-4 sm:flex-row sm:justify-between sm:gap-0">
        <Link
          href="/"
          className="font-serif text-3xl font-black tracking-tight text-crimson dark:text-crimson-light sm:text-4xl"
        >
          The Crimson Letter
        </Link>
        <nav className="flex items-center gap-6 text-sm font-semibold uppercase tracking-widest text-zinc-700 dark:text-zinc-300">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-crimson dark:hover:text-crimson-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
