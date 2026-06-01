import type { Metadata } from "next";
import { getPostBySlug } from "../../../lib/posts";
import { marked } from "marked";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

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

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  const html = marked(post.content);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <a href="/noticias" className="text-cyan-400 text-sm">
          ← Voltar para Notícias
        </a>

        <p className="text-cyan-400 font-bold mt-8">
          {post.category}
        </p>

        <h1 className="text-5xl md:text-6xl font-black mt-4 leading-tight">
          {post.title}
        </h1>

        <p className="text-zinc-400 text-xl mt-5">
          {post.excerpt}
        </p>

        <p className="text-zinc-500 mt-4">
          Publicado em {post.date}
        </p>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-3xl mt-10"
        />

        <div
          className="prose prose-invert prose-cyan max-w-none mt-10 text-lg"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      <Footer />
    </main>
  );
}