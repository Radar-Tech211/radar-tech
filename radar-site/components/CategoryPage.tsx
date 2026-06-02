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

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <div className="relative overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-900 p-6 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_40%)]" />

          <div className="relative">
            <span className="text-5xl">{emoji}</span>

            <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-cyan-400">
              Categoria
            </p>

            <h1 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
              {title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-xl">
              {description}
            </p>

            <p className="mt-6 inline-flex rounded-full border border-zinc-700 px-4 py-2 text-sm font-bold text-zinc-300">
              {posts.length} artigos publicados
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 md:px-6 md:pb-20">
        {posts.length === 0 ? (
          <p className="rounded-2xl bg-zinc-900 p-6 text-zinc-400">
            Nenhum artigo publicado nesta categoria ainda.
          </p>
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