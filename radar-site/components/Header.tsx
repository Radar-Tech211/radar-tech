export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-400/20">
              <span className="text-zinc-950 font-black text-lg">
                RT
              </span>
            </div>

            <div className="leading-none">
              <p className="text-2xl md:text-3xl font-black tracking-tight">
                Radar<span className="text-cyan-400">Tech</span>
              </p>
              <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.25em]">
                tecnologia sem enrolação
              </p>
            </div>
          </a>
        </div>

        <nav className="mt-4 flex gap-4 overflow-x-auto whitespace-nowrap text-sm text-zinc-300 md:justify-end md:gap-6">
          <a href="/noticias" className="hover:text-cyan-400">Notícias</a>
          <a href="/ia" className="hover:text-cyan-400">IA</a>
          <a href="/celulares" className="hover:text-cyan-400">Celulares</a>
          <a href="/robotica" className="hover:text-cyan-400">Robótica</a>
          <a href="/games" className="hover:text-cyan-400">Games</a>
          <a href="/hardware" className="hover:text-cyan-400">Hardware</a>
        </nav>
      </div>
    </header>
  );
}