import Image from "next/image";
import type { Post } from "../lib/posts";
import { formatShortDate, readingTime } from "../lib/formatDate";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <a
      href={`/posts/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:border-cyan-400 hover:bg-zinc-800 active:scale-[0.99]"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-black uppercase tracking-wide text-cyan-400">
            {post.category}
          </span>

          <span className="text-zinc-600">•</span>

          <span className="text-zinc-500">
            {formatShortDate(post.date)}
          </span>

          <span className="text-zinc-600">•</span>

          <span className="text-zinc-500">
            {readingTime(post.content)}
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