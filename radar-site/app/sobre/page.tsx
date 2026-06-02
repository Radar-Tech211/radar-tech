import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Sobre() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">
          Sobre o projeto
        </p>

        <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
          Tecnologia sem enrolação.
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-zinc-300 md:text-xl">
          O Radar Tech nasceu para acompanhar as mudanças mais importantes do
          mundo da tecnologia com linguagem direta, visual moderno e foco no que
          realmente importa para o público brasileiro.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-2xl font-black">
              O que cobrimos
            </h2>

            <p className="mt-4 leading-relaxed text-zinc-400">
              Inteligência artificial, celulares, robótica, games, hardware,
              aplicativos, tendências digitais e tudo que ajuda a entender o
              futuro da tecnologia.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-2xl font-black">
              Nosso estilo
            </h2>

            <p className="mt-4 leading-relaxed text-zinc-400">
              Nada de texto travado ou notícia com cara de comunicado. A ideia é
              explicar tecnologia de forma clara, rápida e conectada com quem
              vive internet todos os dias.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-zinc-900 to-cyan-950/30 p-6 md:p-8">
          <h2 className="text-2xl font-black">
            Por que o Radar Tech existe?
          </h2>

          <p className="mt-4 leading-relaxed text-zinc-300">
            Porque tecnologia está em tudo: no celular, nos estudos, nos jogos,
            no trabalho, na segurança digital e nas próximas grandes mudanças da
            sociedade. O Radar Tech existe para filtrar esse caos e mostrar o
            que merece atenção.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/noticias"
              className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-black text-zinc-950"
            >
              Ver notícias
            </a>

            <a
              href="/ia"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-bold text-zinc-200"
            >
              Explorar IA
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}