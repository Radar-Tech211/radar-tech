export default function Header() {
  const links = [
    { href: "/noticias", label: "Notícias" },
    { href: "/ia", label: "IA" },
    { href: "/celulares", label: "Celulares" },
    { href: "/robotica", label: "Robótica" },
    { href: "/games", label: "Games" },
    { href: "/hardware", label: "Hardware" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-400/20 shrink-0">
              <span className="text-zinc-950 font-black text-lg">
                RT
              </span>
            </div>

            <div className="leading-none min-w-0">
              <p className="text-2xl md:text-3xl font-black tracking-tight">
                Radar<span className="text-cyan-400">Tech</span>
              </p>
              <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.25em] truncate">
                tecnologia sem enrolação
              </p>
            </div>
          </a>

          <a
            href="/noticias"
            className="hidden md:inline-flex text-sm font-bold text-cyan-400 hover:text-cyan-300"
          >
            Últimas notícias
          </a>
        </div>

        <nav className="mt-4 flex gap-3 overflow-x-auto whitespace-nowrap pb-1 text-sm text-zinc-300 md:justify-end md:gap-6 md:overflow-visible">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 hover:border-cyan-400 hover:text-cyan-400 md:border-0 md:bg-transparent md:px-0 md:py-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}