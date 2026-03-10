import { blogPosts } from "@/lib/blog-data";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Blogs - Extractify",
  description: "Read insightful articles about social media, content creation, and AI.",
};

export default function BlogsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1312px] px-4 pt-6">
        <nav className="flex items-center gap-2 text-sm font-medium text-[#6c7880]">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Blogs</span>
        </nav>
      </div>

      {/* Page title */}
      <div className="mx-auto max-w-[1312px] px-4 py-10">
        <h1 className="text-2xl font-semibold text-foreground text-center">
          All Blogs
        </h1>
      </div>

      {/* Blog grid */}
      <div className="mx-auto max-w-[1312px] px-4 pb-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
