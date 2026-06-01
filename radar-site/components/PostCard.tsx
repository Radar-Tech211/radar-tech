import type { Post } from "../lib/posts";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <a
      href={`/posts/${post.slug}`}
      className="group block overflow-hidden rounded-2xl bg-zinc-900 transition hover:bg-zinc-800 active:scale-[0.99]"
    >
      <img
        src={post.image}
        alt={post.title}
        className="h-40 w-full object-cover transition group-hover:scale-105 md:h-44"
      />

      <div className="p-4 md:p-5">
        <span className="text-xs font-black uppercase tracking-wide text-cyan-400">
          {post.category}
        </span>

        <h2 className="mt-3 text-xl font-black leading-tight md:text-2xl">
          {post.title}
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
          {post.excerpt}
        </p>
      </div>
    </a>
  );
}