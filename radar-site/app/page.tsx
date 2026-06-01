import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { getAllPosts, getPostsByCategory } from "../lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const destaque = posts[0];

  const ia = getPostsByCategory("IA").slice(0, 3);
  const celulares = getPostsByCategory("CELULARES").slice(0, 3);
  const robotica = getPostsByCategory("ROBÓTICA").slice(0, 3);
  const games = getPostsByCategory("GAMES").slice(0, 3);
  const hardware = getPostsByCategory("HARDWARE").slice(0, 3);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <p className="text-cyan-400 font-bold uppercase text-sm">
          Radar Tech
        </p>

        <h1 className="text-4xl md:text-7xl font-black mt-4 max-w-5xl leading-tight">
          Tecnologia, IA, celulares e futuro sem enrolação.
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl mt-5 max-w-3xl">
          Notícias, análises e tendências do mundo tech com linguagem direta.
        </p>
      </section>

      <SearchBox posts={posts} />

      {destaque && (
        <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            🔥 Destaque
          </h2>

          <a
            href={`/posts/${destaque.slug}`}
            className="grid md:grid-cols-2 bg-zinc-900 rounded-2xl md:rounded-3xl overflow-hidden hover:bg-zinc-800 transition"
          >
            <img
              src={destaque.image}
              alt={destaque.title}
              className="w-full h-56 md:h-80 object-cover"
            />

            <div className="p-5 md:p-8 flex flex-col justify-center">
              <span className="text-cyan-400 text-sm font-bold">
                {destaque.category}
              </span>

              <h3 className="text-2xl md:text-4xl font-black mt-3 leading-tight">
                {destaque.title}
              </h3>

              <p className="text-zinc-400 text-base md:text-lg mt-4">
                {destaque.excerpt}
              </p>
            </div>
          </a>
        </section>
      )}

      <CategorySection title="🤖 Inteligência Artificial" href="/ia" posts={ia} />
      <CategorySection title="📱 Celulares" href="/celulares" posts={celulares} />
      <CategorySection title="🦾 Robótica" href="/robotica" posts={robotica} />
      <CategorySection title="🎮 Games" href="/games" posts={games} />
      <CategorySection title="🖥️ Hardware" href="/hardware" posts={hardware} />

      <Footer />
    </main>
  );
}

function CategorySection({
  title,
  href,
  posts,
}: {
  title: string;
  href: string;
  posts: ReturnType<typeof getAllPosts>;
}) {
  if (posts.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-16">
      <div className="flex items-center justify-between gap-4 mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          {title}
        </h2>

        <a
          href={href}
          className="text-cyan-400 text-sm font-bold shrink-0"
        >
          Ver mais →
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}