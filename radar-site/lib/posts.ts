import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app/posts");

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
};

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(".md", "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: String(data.title),
    category: String(data.category),
    date: String(data.date),
    excerpt: String(data.excerpt),
    image: String(data.image),
    content,
  };
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => getPostBySlug(file))
    .sort((a, b) => b.date.localeCompare(a.date));
}export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}