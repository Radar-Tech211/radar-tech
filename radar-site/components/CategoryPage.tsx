import Header from "./Header";
import Footer from "./Footer";
import PostCard from "./PostCard";
import { getPostsByCategory } from "../lib/posts";

type CategoryPageProps = {
  title: string;
  description: string;
  category: string;
};

export default function CategoryPage({
  title,
  description,
  category,
}: CategoryPageProps) {
  const posts = getPostsByCategory(category);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <a href="/" className="text-cyan-400 text-sm">
          ← Voltar
        </a>

        <h1 className="text-5xl font-black mt-6">
          {title}
        </h1>

        <p className="text-zinc-400 text-xl mt-4">
          {description}
        </p>

        {posts.length === 0 ? (
          <p className="text-zinc-500 mt-10">
            Nenhum artigo publicado nesta categoria ainda.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 mt-10">
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