export default function Header() {
  const links = [
    { href: "/noticias", label: "Notícias" },
    { href: "/ia", label: "IA" },
    { href: "/celulares", label: "Celulares" },
    { href: "/robotica", label: "Robótica" },
    { href: "/games", label: "Games" },
    { href: "/hardware", label: "Hardware" },
    { href: "/sobre", label: "Sobre" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
        <div className="flex items-center justify-between gap-6">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-400 shadow-lg shadow-cyan-400/20">
              <span className="text-lg font-black text-zinc-950">
                RT
              </span>
            </div>

            <div className="min-w-0 leading-none">
              <p className="text-2xl font-black tracking-tight md:text-3xl">
                Radar<span className="text-cyan-400">Tech</span>
              </p>

              <p className="truncate text-[10px] uppercase tracking-[0.25em] text-zinc-500 md:text-xs">
                tecnologia sem enrolação
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <nav className="mt-4 flex gap-3 overflow-x-auto whitespace-nowrap pb-2 text-sm text-zinc-300 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}