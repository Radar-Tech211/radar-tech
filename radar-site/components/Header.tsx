export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="/" className="text-3xl font-black tracking-tight">
          Radar<span className="text-cyan-400">Tech</span>
        </a>

        <nav className="hidden md:flex gap-6 text-sm text-zinc-300">
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