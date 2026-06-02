import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contato() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">
          Contato
        </p>

        <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
          Fale com o Radar Tech.
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
          Envie sugestões de pauta, correções, ideias de parceria ou assuntos
          que você quer ver no Radar Tech.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-2xl font-black">Sugestões de pauta</h2>

            <p className="mt-4 leading-relaxed text-zinc-400">
              Tem uma notícia, lançamento ou tendência tech que merece entrar no
              radar? Envie uma sugestão.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-2xl font-black">Correções</h2>

            <p className="mt-4 leading-relaxed text-zinc-400">
              Encontrou algum erro em uma matéria? O Radar Tech pode corrigir e
              atualizar o conteúdo.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-zinc-900 to-cyan-950/30 p-6 md:p-8">
          <h2 className="text-2xl font-black">Email</h2>

          <p className="mt-4 text-lg font-bold text-cyan-400">
            contato@radartech.com.br
          </p>

          <p className="mt-3 leading-relaxed text-zinc-400">
            Use esse endereço como contato oficial do projeto. Quando tiver
            domínio próprio, esse email fica ainda mais profissional.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
