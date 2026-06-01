import type { Post } from "../lib/posts";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <a
      href={`/posts/${post.slug}`}
      className="bg-zinc-900 rounded-2xl overflow-hidden hover:bg-zinc-800 transition"
    >
      <img
        src={post.image}
        alt={post.title}
        className="h-44 w-full object-cover"
      />

      <div className="p-5">
        <span className="text-cyan-400 text-sm font-bold">
          {post.category}
        </span>

        <h2 className="text-2xl font-bold mt-3">
          {post.title}
        </h2>

        <p className="text-zinc-400 mt-3">
          {post.excerpt}
        </p>
      </div>
    </a>
  );
}