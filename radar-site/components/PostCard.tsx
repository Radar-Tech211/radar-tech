import type { Post } from "../lib/posts";

type PostCardProps = {
  post: Post;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <a
      href={`/posts/${post.slug}`}
      className="group block overflow-hidden rounded-2xl bg-zinc-900 transition hover:bg-zinc-800 active:scale-[0.99]"
    >
      <img
        src={post.image}
        alt={post.title}
        className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 md:h-44"
      />

      <div className="p-4 md:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-black uppercase tracking-wide text-cyan-400">
            {post.category}
          </span>

          <span className="text-xs text-zinc-600">•</span>

          <span className="text-xs text-zinc-500">
            {formatDate(post.date)}
          </span>
        </div>

        <h2 className="mt-3 text-xl font-black leading-tight md:text-2xl">
          {post.title}
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-400 md:text-base">
          {post.excerpt}
        </p>
      </div>
    </a>
  );
}