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

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function getReadingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min de leitura`;
}

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
      publishedTime: post.date,
      authors: ["Radar Tech"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Radar Tech",
    },
    publisher: {
      "@type": "Organization",
      name: "Radar Tech",
      logo: {
        "@type": "ImageObject",
        url: "https://radar-tech-ob2f.vercel.app/og-image.png",
      },
    },
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      <article className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
        <a
          href="/noticias"
          className="inline-flex rounded-full border border-zinc-800 px-4 py-2 text-sm font-bold text-cyan-400 transition hover:border-cyan-400"
        >
          ← Voltar para notícias
        </a>

        <header className="mt-8">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
            {post.category}
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            {post.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            {post.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-500">
            <span>Por Radar Tech</span>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{getReadingTime(post.content)}</span>
          </div>
        </header>

        <img
          src={post.image}
          alt={post.title}
          className="mt-10 h-72 w-full rounded-3xl object-cover md:h-[460px]"
        />

        <div
          className="prose prose-invert prose-cyan mt-10 max-w-none prose-headings:font-black prose-p:text-zinc-300 prose-a:font-bold prose-a:text-cyan-400 prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      {relatedPosts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-14 md:px-6 md:pb-20">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-black md:text-3xl">
              Leia também
            </h2>

            <a
              href={`/${post.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="shrink-0 text-sm font-bold text-cyan-400"
            >
              Ver categoria →
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {relatedPosts.map((related) => (
              <PostCard key={related.slug} post={related} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}