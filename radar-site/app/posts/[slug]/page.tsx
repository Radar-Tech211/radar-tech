import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "../../../lib/posts";
import { marked } from "marked";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PostCard from "../../../components/PostCard";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return {
    title: `${post.title} | Radar Tech`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

function getReadingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min de leitura`;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  const html = marked(post.content);

  const relatedPosts = getAllPosts()
    .filter(
      (item) =>
        item.slug !== post.slug &&
        item.category.toLowerCase() === post.category.toLowerCase()
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <article className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-12">
        <a
          href="/noticias"
          className="inline-flex rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-cyan-400 hover:border-cyan-400"
        >
          ← Voltar para Notícias
        </a>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-cyan-400 px-3 py-1 font-black uppercase text-zinc-950">
            {post.category}
          </span>

          <span className="text-zinc-500">
            {formatDate(post.date)}
          </span>

          <span className="text-zinc-600">
            •
          </span>

          <span className="text-zinc-500">
            ⏱️ {getReadingTime(post.content)}
          </span>
        </div>

        <h1 className="mt-5 text-3xl md:text-6xl font-black leading-tight">
          {post.title}
        </h1>

        <p className="mt-5 text-lg md:text-xl leading-relaxed text-zinc-400">
          {post.excerpt}
        </p>

        <img
          src={post.image}
          alt={post.title}
          className="mt-8 md:mt-10 h-56 md:h-80 w-full rounded-2xl md:rounded-3xl object-cover"
        />

        <div
          className="prose prose-invert prose-cyan max-w-none mt-8 md:mt-10 text-base md:text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-16">
          <div className="mb-6 md:mb-8">
            <p className="text-cyan-400 text-sm font-bold uppercase">
              Continue lendo
            </p>

            <h2 className="mt-2 text-2xl md:text-3xl font-black">
              Você também pode gostar
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {relatedPosts.map((item) => (
              <PostCard key={item.slug} post={item} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}