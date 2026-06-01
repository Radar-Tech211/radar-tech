import type { MetadataRoute } from "next";
import { getAllPosts } from "../lib/posts";

const siteUrl = "https://radar-tech-ob2f.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticRoutes = [
    "",
    "/noticias",
    "/ia",
    "/celulares",
    "/robotica",
    "/games",
    "/hardware",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${siteUrl}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}