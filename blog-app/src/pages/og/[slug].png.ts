import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";
import { Resvg } from "@resvg/resvg-js";

type PostEntry = CollectionEntry<"posts">;

export const prerender = true;

const WIDTH = 1200;
const HEIGHT = 630;
const TITLE_MAX_LINES = 3;
const DESCRIPTION_MAX_LINES = 3;

export async function getStaticPaths() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);

  return posts.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

export async function GET({ props }: { props: { entry: PostEntry } }) {
  const { entry } = props;

  const titleLines = wrapText(entry.data.title, 22, TITLE_MAX_LINES);
  const descriptionLines = wrapText(
    entry.data.description,
    42,
    DESCRIPTION_MAX_LINES,
  );

  const formattedDate = Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(entry.data.pubDate);

  const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="40%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#gradient)" rx="36" />

  <g font-family="Montserrat, 'Segoe UI', sans-serif" fill="#f8fafc">
    <text x="72" y="116" font-size="36" font-weight="600" opacity="0.9">monquero.dev.br</text>
    <text x="${WIDTH - 72}" y="116" font-size="32" text-anchor="end" opacity="0.85">Blog</text>

    <g font-size="72" font-weight="700" letter-spacing="-1.5" line-height="1.1">
      ${titleLines
        .map(
          (line, index) =>
            `<text x="72" y="${210 + index * 86}">${escapeXML(line)}</text>`,
        )
        .join("")}
    </g>

    <g font-size="32" fill="rgba(241, 245, 249, 0.85)">
      ${descriptionLines
        .map(
          (line, index) =>
            `<text x="72" y="${430 + index * 48}">${escapeXML(line)}</text>`,
        )
        .join("")}
    </g>

    <text x="72" y="${HEIGHT - 96}" font-size="28" opacity="0.9">
      Douglas Monquero
    </text>
    <text x="${WIDTH - 72}" y="${HEIGHT - 96}" font-size="26" opacity="0.82" text-anchor="end">
      ${escapeXML(formattedDate)}
    </text>
  </g>
</svg>
`;

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: WIDTH },
  });

  const pngData = resvg.render().asPng();

  return new Response(pngData, {
    headers: { "Content-Type": "image/png" },
  });
}

function wrapText(text: string, maxChars: number, maxLines: number) {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const testLine = current ? `${current} ${word}` : word;
    if (testLine.length > maxChars) {
      if (current) {
        lines.push(current);
      }
      current = word;
      if (lines.length === maxLines - 1) {
        break;
      }
    } else {
      current = testLine;
    }
  }

  if (lines.length < maxLines && current) {
    lines.push(current);
  }

  if (lines.length === maxLines && words.length > 0) {
    const lastIndex = lines.length - 1;
    if (lines[lastIndex].length > maxChars) {
      lines[lastIndex] = `${lines[lastIndex].slice(0, maxChars - 1)}…`;
    }
  }

  return lines;
}

function escapeXML(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
