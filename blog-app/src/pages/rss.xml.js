import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;

  const items = posts
    .sort(
      (a, b) =>
        new Date(b.data.pubDate).valueOf() -
        new Date(a.data.pubDate).valueOf(),
    )
    .map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `${normalizedBase}${post.slug}/`,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
    }));

  return rss({
    title: "Monquero Blog",
    description: "Posts do Douglas",
    site: context.site,
    items,
  });
}
