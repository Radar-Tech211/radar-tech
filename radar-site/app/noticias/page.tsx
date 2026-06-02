import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostCard from "../../components/PostCard";
import { getAllPosts, getPostsByCategory } from "../../lib/posts";

export default function Noticias() {
  const posts = getAllPosts();
  const destaque = posts[0];
  const restantes = posts.slice(1);

  const categorias = [
    {
      label: "IA",
      href: "/ia",
      count: getPostsByCategory("IA").length,
    },
    {
      label: "Celulares",
      href: "/celulares",
      count: getPostsByCategory("CELULARES").length,
    },
    {
      label: "Robótica",
      href: "/robotica",
      count: getPostsByCategory("ROBÓTICA").length,
    },
    {
      label: "Games",
      href: "/games",
      count: getPostsByCategory("GAMES").length,
    },
    {
      label: "Hardware",
      href: "/hardware",
      count: getPostsByCategory("HARDWARE").length,
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <div className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900 p-6 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_40%)]" />

          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">
              Central de notícias
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Notícias de tecnologia em tempo direto.
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              IA, celulares, robótica, games, hardware e tudo que mexe com o futuro.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-5">
              {categorias.map((categoria) => (
                <a
                  key={categoria.href}
                  href={categoria.href}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 transition hover:border-cyan-400"
                >
                  <p className="text-lg font-black text-white">
                    {categoria.label}
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    {categoria.count} artigos
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {destaque && (
        <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6 md:pb-14">
          <h2 className="mb-5 text-2xl font-black md:text-3xl">
            🔥 Última em destaque
          </h2>

          <a
            href={`/posts/${destaque.slug}`}
            className="grid overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition hover:border-cyan-400 md:grid-cols-2"
          >
            <img
              src={destaque.image}
              alt={destaque.title}
              className="h-60 w-full object-cover md:h-full"
            />

            <div className="flex flex-col justify-center p-5 md:p-8">
              <span className="text-xs font-black uppercase tracking-wide text-cyan-400">
                {destaque.category}
              </span>

              <h3 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
                {destaque.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">
                {destaque.excerpt}
              </p>

              <span className="mt-6 text-sm font-black text-cyan-400">
                Ler notícia →
              </span>
            </div>
          </a>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 pb-14 md:px-6 md:pb-20">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-black md:text-3xl">
            Todas as notícias
          </h2>

          <p className="text-sm text-zinc-500">
            {posts.length} publicações
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {restantes.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}