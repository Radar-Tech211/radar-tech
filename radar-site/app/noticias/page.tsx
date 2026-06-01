import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostCard from "../../components/PostCard";
import { getAllPosts } from "../../lib/posts";

export default function Noticias() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-black">
          Notícias de Tecnologia
        </h1>

        <p className="text-zinc-400 text-xl mt-4">
          IA, celulares, robótica, games, hardware, apps e tudo que mexe com o futuro.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}