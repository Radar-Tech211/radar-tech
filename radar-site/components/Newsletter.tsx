export default function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 md:px-6 md:pb-20">
      <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-zinc-900 via-zinc-950 to-cyan-950/40 p-6 md:p-10">
        <div className="absolute -right-12 -top-16 text-[180px] opacity-10 md:text-[260px]">
          📡
        </div>

        <div className="relative grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">
              Newsletter
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Receba tecnologia sem enrolação.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
              Um resumo direto sobre IA, celulares, games, hardware e robótica
              para acompanhar o que realmente importa no mundo tech.
            </p>
          </div>

          <form className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5">
            <label className="text-sm font-bold text-zinc-300">
              Seu email
            </label>

            <input
              type="email"
              placeholder="voce@email.com"
              className="mt-3 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
            />

            <button
              type="button"
              className="mt-4 w-full rounded-2xl bg-cyan-400 px-5 py-4 text-sm font-black text-zinc-950 transition hover:bg-cyan-300"
            >
              Quero receber
            </button>

            <p className="mt-3 text-xs leading-relaxed text-zinc-500">
              Sem spam. Apenas conteúdo tech direto ao ponto.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}