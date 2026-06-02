import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <section className="mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center md:px-6 md:py-28">
        <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
          Erro 404
        </div>

        <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
          Essa página saiu do radar.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          O link pode ter mudado, a notícia pode não existir mais ou você caiu
          em uma rota fora do alcance do Radar Tech.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="/"
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-black text-zinc-950 transition hover:bg-cyan-300"
          >
            Voltar para início
          </a>

          <a
            href="/noticias"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-bold text-zinc-200 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Ver notícias
          </a>

          <a
            href="/ia"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-bold text-zinc-200 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Explorar IA
          </a>
        </div>

        <div className="mt-14 grid w-full gap-4 md:grid-cols-3">
          <a
            href="/celulares"
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 text-left transition hover:border-cyan-400"
          >
            <p className="text-3xl">📱</p>
            <h2 className="mt-4 text-xl font-black">Celulares</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Lançamentos, câmeras, bateria e mercado mobile.
            </p>
          </a>

          <a
            href="/games"
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 text-left transition hover:border-cyan-400"
          >
            <p className="text-3xl">🎮</p>
            <h2 className="mt-4 text-xl font-black">Games</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Jogos, consoles, cloud gaming e tecnologia gamer.
            </p>
          </a>

          <a
            href="/hardware"
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 text-left transition hover:border-cyan-400"
          >
            <p className="text-3xl">🖥️</p>
            <h2 className="mt-4 text-xl font-black">Hardware</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Chips, PCs, placas, SSDs e componentes.
            </p>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}