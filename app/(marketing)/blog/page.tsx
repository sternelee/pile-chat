import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { BlogPosts } from "@/components/blog-posts";

export const metadata = {
  title: "pilechat Blog - Revolutionizing Real Estate with AI",
  description:
    "Explore the latest insights on AI in real estate, innovative property listing strategies, and industry trends in the pilechat blog.",
};

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <main>
      <BlogPosts posts={posts} />
    </main>
  );
}
