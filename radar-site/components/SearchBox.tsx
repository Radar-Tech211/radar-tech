"use client";

import { useState } from "react";
import type { Post } from "../lib/posts";
import PostCard from "./PostCard";

type SearchBoxProps = {
  posts: Post[];
};

export default function SearchBox({ posts }: SearchBoxProps) {
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const text = `${post.title} ${post.category} ${post.excerpt}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <div className="bg-zinc-900 rounded-3xl p-6">
        <label className="text-sm font-bold text-cyan-400">
          BUSCAR NO RADAR TECH
        </label>

        <input
          type="text"
          placeholder="Pesquise por IA, celular, games, hardware..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full mt-4 rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-4 text-white outline-none focus:border-cyan-400"
        />
      </div>

      {query.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">
            Resultados da busca
          </h2>

          {filteredPosts.length === 0 ? (
            <p className="text-zinc-500">
              Nenhum artigo encontrado.
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}