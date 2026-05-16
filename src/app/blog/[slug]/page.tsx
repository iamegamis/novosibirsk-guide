import { notFound } from "next/navigation";
import { POSTS } from "@/lib/posts";
import BlogPostClient from "@/components/blog/BlogPostClient";
import type { Metadata } from "next";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.id }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = POSTS.find((p) => p.id === params.slug);
  if (!post) return {};
  return {
    title: post.title.ru,
    description: post.excerpt.ru,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.id === params.slug);
  if (!post) notFound();
  return <BlogPostClient post={post} />;
}
