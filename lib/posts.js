import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

// Returns metadata for all posts, sorted newest first.
export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Pull the first markdown image (![alt](/path.jpg)) out of the post body,
    // so the homepage can show it without needing a manual "image" field.
    const imageMatch = content.match(/!\[[^\]]*\]\(([^)]+)\)/);
    const firstImage = imageMatch ? imageMatch[1] : null;

    return {
      slug,
      image: data.image || firstImage,
      ...data
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Returns all slugs, used by generateStaticParams.
export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, "")
  }));
}

// Returns full post content (converted to HTML) plus metadata for one slug.
export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...data
  };
}

// Returns all posts except the given slug, newest first — used for "Other Posts" sidebars.
export function getOtherPosts(currentSlug) {
  return getSortedPostsData().filter((post) => post.slug !== currentSlug);
}
