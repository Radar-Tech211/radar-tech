import Newsletter from "../components/Newsletter";
import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { getAllPosts, getPostsByCategory } from "../lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const destaque = posts[0];

  const ultimas = posts.slice(0, 4);
  const destaqueSemana = posts[1] || posts[0];
  const maisLidas = posts.slice(2, 7);

  const ia = getPostsByCategory("IA").slice(0, 3);
  const celulares = getPostsByCategory("CELULARES").slice(0, 3);
  const robotica = getPostsByCategory("ROBÓTICA").slice(0, 3);
  const games = getPostsByCategory("GAMES").slice(0, 3);
  const hardware = getPostsByCategory("HARDWARE").slice(0, 3);

  const stats = [
    { label: "artigos publicados", value: posts.length },
    { label: "categorias tech", value: 5 },
    { label: "foco em tecnologia", value: "100%" },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-6 md:px-6 md:pb-12 md:pt-10">
        <div className="relative overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-900 md:rounded-[34px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_38%)]" />

          <div className="relative grid gap-6 p-5 md:grid-cols-2 md:gap-8 md:p-8 lg:p-10">
            <div className="flex flex-col justify-center">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-400">
                Radar Tech
              </p>

              <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
                Tecnologia, IA e futuro sem enrolação.
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
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

              <div className="mt-8 grid grid-cols-3 gap-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4"
                  >
                    <p className="text-2xl font-black text-cyan-400">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs leading-tight text-zinc-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {destaque && (
              <a
                href={`/posts/${destaque.slug}`}
                className="group relative min-h-[390px] overflow-hidden rounded-3xl bg-zinc-950 md:min-h-[430px] lg:min-h-[460px]"
              >
                <img
                  src={destaque.image}
                  alt={destaque.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/10" />

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-black uppercase text-zinc-950">
                    {destaque.category}
                  </span>

                  <h2 className="mt-4 text-2xl font-black leading-tight md:text-3xl">
                    {destaque.title}
                  </h2>

                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-300 md:text-base">
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

      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6 md:pb-16">
        <div className="mb-5 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-2xl font-black leading-tight md:text-3xl">
            ⚡ Últimas notícias
          </h2>

          <a href="/noticias" className="shrink-0 text-sm font-bold text-cyan-400">
            Ver todas →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-4 md:gap-6">
          {ultimas.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {destaqueSemana && (
        <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6 md:pb-16">
          <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-zinc-900 via-zinc-950 to-cyan-950/30">
            <div className="grid md:grid-cols-2">
              <img
                src={destaqueSemana.image}
                alt={destaqueSemana.title}
                className="h-64 w-full object-cover md:h-full"
              />

              <div className="flex flex-col justify-center p-6 md:p-10">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">
                  Destaque da semana
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                  {destaqueSemana.title}
                </h2>

                <p className="mt-5 text-base leading-relaxed text-zinc-300 md:text-lg">
                  {destaqueSemana.excerpt}
                </p>

                <a
                  href={`/posts/${destaqueSemana.slug}`}
                  className="mt-7 w-fit rounded-full bg-cyan-400 px-6 py-3 text-sm font-black text-zinc-950 transition hover:bg-cyan-300"
                >
                  Ler destaque →
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      <CategorySection title="🤖 Inteligência Artificial" href="/ia" posts={ia} />
      <CategorySection title="📱 Celulares" href="/celulares" posts={celulares} />
      <CategorySection title="🦾 Robótica" href="/robotica" posts={robotica} />
      <CategorySection title="🎮 Games" href="/games" posts={games} />
      <CategorySection title="🖥️ Hardware" href="/hardware" posts={hardware} />

      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6 md:pb-16">
        <div className="mb-5 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-2xl font-black leading-tight md:text-3xl">
            📈 Mais lidas
          </h2>

          <span className="text-sm font-bold text-zinc-500">
            Seleção Radar Tech
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {maisLidas.map((post, index) => (
            <a
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-cyan-400 hover:bg-zinc-800"
            >
              <p className="text-4xl font-black text-cyan-400">
                {String(index + 1).padStart(2, "0")}
              </p>

              <p className="mt-4 text-xs font-black uppercase tracking-wide text-cyan-400">
                {post.category}
              </p>

              <h3 className="mt-3 text-lg font-black leading-tight">
                {post.title}
              </h3>

              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-400">
                {post.excerpt}
              </p>
            </a>
          ))}
        </div>
      </section>

      <Newsletter />
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
    <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6 md:pb-16">
      <div className="mb-5 flex items-center justify-between gap-4 md:mb-8">
        <h2 className="text-2xl font-bold leading-tight md:text-3xl">
          {title}
        </h2>

        <a href={href} className="shrink-0 text-sm font-bold text-cyan-400">
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