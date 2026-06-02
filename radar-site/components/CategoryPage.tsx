import Header from "./Header";
import Footer from "./Footer";
import PostCard from "./PostCard";
import { getPostsByCategory } from "../lib/posts";

type CategoryPageProps = {
  title: string;
  emoji: string;
  description: string;
  category: string;
};

export default function CategoryPage({
  title,
  emoji,
  description,
  category,
}: CategoryPageProps) {
  const posts = getPostsByCategory(category);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
        <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-zinc-900 via-zinc-950 to-cyan-950/40 px-6 py-10 md:px-10 md:py-16">
          <div className="absolute -right-8 -top-10 text-[180px] opacity-10 md:text-[260px]">
            {emoji}
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_35%)]" />

          <div className="relative max-w-4xl">
            <a
              href="/"
              className="inline-flex rounded-full border border-zinc-700 bg-zinc-950/60 px-4 py-2 text-sm font-bold text-cyan-400 hover:border-cyan-400"
            >
              ← Voltar para início
            </a>

            <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-cyan-400">
              Categoria
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight md:text-7xl">
              {emoji} {title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-2xl">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-black text-zinc-950">
                {posts.length} artigos publicados
              </span>

              <span className="rounded-full border border-zinc-700 bg-zinc-950/60 px-5 py-3 text-sm font-bold text-zinc-300">
                Atualizado constantemente
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 md:px-6 md:pb-20">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-black md:text-3xl">
            Últimas em {title}
          </h2>

          <a href="/noticias" className="text-sm font-bold text-cyan-400">
            Todas as notícias →
          </a>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-zinc-400">
            Nenhum artigo publicado nesta categoria ainda.
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}