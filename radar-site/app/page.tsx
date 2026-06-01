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

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-6 pb-8 md:pt-10 md:pb-14">
        <div className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_40%)]" />

          <div className="relative grid gap-8 p-5 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div className="flex flex-col justify-center">
              <p className="text-cyan-400 font-black uppercase text-xs md:text-sm tracking-[0.25em]">
                Radar Tech
              </p>

              <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight md:text-6xl">
                Tecnologia, IA e futuro sem enrolação.
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-xl">
                Notícias, análises e tendências do mundo tech em linguagem direta.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/noticias"
                  className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-black text-zinc-950 transition hover:bg-cyan-300"
                >
                  Ler últimas notícias
                </a>

                <a
                  href="/ia"
                  className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-bold text-zinc-200 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  Explorar IA
                </a>
              </div>
            </div>

            {destaque && (
              <a
                href={`/posts/${destaque.slug}`}
                className="group relative min-h-[340px] overflow-hidden rounded-3xl bg-zinc-950"
              >
                <img
                  src={destaque.image}
                  alt={destaque.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/65 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-black uppercase text-zinc-950">
                    {destaque.category}
                  </span>

                  <h2 className="mt-4 text-2xl font-black leading-tight md:text-3xl">
                    {destaque.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
                    {destaque.excerpt}
                  </p>

                  <span className="mt-5 inline-flex text-sm font-black text-cyan-400">
                    Ler matéria →
                  </span>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      <SearchBox posts={posts} />

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
    <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10 md:pb-16">
      <div className="flex items-center justify-between gap-4 mb-5 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          {title}
        </h2>

        <a href={href} className="text-cyan-400 text-sm font-bold shrink-0">
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