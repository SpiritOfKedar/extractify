import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import BlogCard from "@/components/BlogCard";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts
    .filter((post) => post.sections.length > 0)
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog Not Found" };
  return {
    title: `${post.title} - Extractify Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 16);
  const popularPosts = relatedPosts.slice(0, 4);

  const featureImage =
    "https://www.figma.com/api/mcp/asset/be1855f9-e075-4571-8c54-2cb11cef0793";

  const popularImages = [
    "https://www.figma.com/api/mcp/asset/3dfaffc9-f58d-4e82-8f57-2fd2b25dcc9e",
    "https://www.figma.com/api/mcp/asset/5a24dd78-eab7-4952-ba84-83f7915a873a",
    "https://www.figma.com/api/mcp/asset/40b0d368-e91b-44f1-8245-b1dd73cfc0f8",
    "https://www.figma.com/api/mcp/asset/a8da67a7-156f-4c95-b325-38fc709a3b3f",
  ];

  const relatedImages = [
    "https://www.figma.com/api/mcp/asset/d18ca799-013a-4c30-a64c-0963615ecca0",
    "https://www.figma.com/api/mcp/asset/80204ce4-71d8-4569-b1e5-f54a1fc24f30",
    "https://www.figma.com/api/mcp/asset/4b4e21af-2964-4ef4-acfe-2af848ddb61c",
    "https://www.figma.com/api/mcp/asset/1875b254-8dfd-46a3-a355-94ae255552eb",
    "https://www.figma.com/api/mcp/asset/993f486c-95e8-4904-811a-63d13e70af93",
    "https://www.figma.com/api/mcp/asset/6f27501a-7e0a-417a-a077-c559c3b11452",
    "https://www.figma.com/api/mcp/asset/f6b9f210-4748-42da-8c0e-afd182bf72cb",
    "https://www.figma.com/api/mcp/asset/56a617fe-e0e1-40fc-b88e-4039ef05b203",
    "https://www.figma.com/api/mcp/asset/53381dc8-b0b1-4711-9312-c15cc5129efb",
    "https://www.figma.com/api/mcp/asset/1dd13cb6-cfe7-4185-b4e1-4247cc5ce7cc",
    "https://www.figma.com/api/mcp/asset/100b9f41-a683-4d7a-bebe-19f9adc0bb40",
    "https://www.figma.com/api/mcp/asset/056e2e8b-79ca-41f6-81a6-d2e5c4eafdc4",
    "https://www.figma.com/api/mcp/asset/7c33ca03-0a03-4324-a13c-88902344a41d",
    "https://www.figma.com/api/mcp/asset/b0420424-d881-4427-a96b-feff703b0dc3",
    "https://www.figma.com/api/mcp/asset/4aa554a1-bb7b-4bc4-9a9d-99394a21226b",
    "https://www.figma.com/api/mcp/asset/1701df57-14b6-47da-98c8-1d89de779f61",
  ];

  const articleParagraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.",
    "Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    "Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.",
    "Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    "Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  ];

  return (
    <div className="bg-[#f4f1f8] min-h-screen pb-20">
      <div className="mx-auto max-w-[1312px] px-4 pt-10">
        <div className="flex items-center justify-center text-[#404040] text-[16px] font-medium">
          <Link href="/blogs" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Back
          </Link>
        </div>

        <h1 className="mt-3 text-center text-[28px] md:text-[32px] font-semibold text-[#2d2d2d]">
          {post.title}
        </h1>

        <div className="mt-2 flex items-center justify-center gap-2 text-[15px] text-[#606060]">
          <span>By Jordan Mirchev</span>
          <span>|</span>
          <span>Published on November 14, 2022</span>
          <span>|</span>
          <span>{post.readTime}</span>
        </div>

        <div className="mt-8 h-[260px] md:h-[420px] lg:h-[594px] w-full overflow-hidden">
          <img
            src={featureImage}
            alt="Blog feature"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1312px] px-4 pt-10">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          <article className="w-full lg:max-w-[929px] text-[16px] leading-[34px] text-[#606060]">
            <div className="space-y-8">
              {articleParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>

          <aside className="w-full lg:w-[318px] shrink-0">
            <h2 className="text-[20px] font-semibold text-[#404040] mb-6">
              Popular blogs
            </h2>
            <div className="space-y-5">
              {popularPosts.map((popularPost, index) => (
                <Link
                  href={`/blogs/${popularPost.slug}`}
                  key={popularPost.slug}
                  className={`flex items-center gap-3 ${index < popularPosts.length - 1 ? "pb-5 border-b border-[#ccc]" : ""}`}
                >
                  <img
                    src={popularImages[index]}
                    alt={popularPost.title}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-medium text-[#404040] leading-[21px] truncate">
                      Blog name
                    </h3>
                    <p className="text-[14px] text-[#606060] leading-6 line-clamp-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <div className="mx-auto max-w-[1312px] px-4 pt-16">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-[24px] font-semibold text-[#2d2d2d] text-center">
            Related Blogs For You
          </h2>

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPosts.map((relatedPost, index) => (
              <BlogCard
                key={relatedPost.slug}
                slug={relatedPost.slug}
                title={relatedPost.title}
                description={relatedPost.description}
                date={relatedPost.date}
                image={relatedImages[index] ?? relatedPost.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
