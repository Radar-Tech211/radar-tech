export default function Footer() {
  const links = [
    { href: "/", label: "Início" },
    { href: "/noticias", label: "Notícias" },
    { href: "/sobre", label: "Sobre" },
  ];

  const categorias = [
    { href: "/ia", label: "Inteligência Artificial" },
    { href: "/celulares", label: "Celulares" },
    { href: "/robotica", label: "Robótica" },
    { href: "/games", label: "Games" },
    { href: "/hardware", label: "Hardware" },
  ];

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <a href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 shadow-lg shadow-cyan-400/20">
                <span className="text-lg font-black text-zinc-950">
                  RT
                </span>
              </div>

              <div className="leading-none">
                <p className="text-2xl font-black tracking-tight text-white">
                  Radar<span className="text-cyan-400">Tech</span>
                </p>

                <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  tecnologia sem enrolação
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-xl leading-relaxed text-zinc-400">
              Notícias, análises e tendências sobre inteligência artificial,
              celulares, robótica, games e hardware em linguagem direta.
            </p>

            <p className="mt-6 text-sm text-zinc-500">
              © 2026 Radar Tech. Todos os direitos reservados.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
              Navegação
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-zinc-400 transition hover:text-cyan-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
              Categorias
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {categorias.map((categoria) => (
                <a
                  key={categoria.href}
                  href={categoria.href}
                  className="text-zinc-400 transition hover:text-cyan-400"
                >
                  {categoria.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-5 text-sm text-zinc-500">
          O Radar Tech é um projeto independente focado em tecnologia, tendências
          digitais e inovação. Conteúdo produzido para informar com clareza e sem
          enrolação.
        </div>
      </div>
    </footer>
  );
}