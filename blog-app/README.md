# Monquero Blog

Blog estático construído com [Astro](https://astro.build/) e integrado ao site principal `monquero.dev.br`.

## Principais recursos

- Posts em Markdown validados via **Content Collections**.
- **Busca local** com Pagefind e interface pronta.
- Comentários com **Giscus** (GitHub Discussions).
- Feed **RSS**, `sitemap.xml` e `robots.txt`.
- **Open Graph** dinâmico para cada post.

## Pré-requisitos

- Node.js 18+
- npm 9+

## Como rodar localmente

```bash
cd blog-app
npm install
npm run dev
```

O projeto sobe em `http://localhost:4321/blog`.

## Preparando deploy

```bash
npm run build          # gera /dist
npx pagefind --site dist  # cria índice da busca
```

O comando `npm run build` já encadeia o Pagefind. Para testar apenas o build Astro, execute:

```bash
npm run build -- --skip-pagefind
```

## Estrutura de conteúdo

- `src/content/posts/*.md` → cada post. Frontmatter obrigatório:
  ```yaml
  ---
  title: "Título"
  description: "Resumo curto"
  pubDate: 2024-10-22
  updatedDate: 2024-10-23 # opcional
  tags:
    - exemplo
  draft: false
  ---
  ```
- `src/pages/index.astro` → lista de posts.
- `src/pages/[slug].astro` → página individual (usa `PostLayout.astro`).
- `src/pages/og/[slug].png.ts` → imagem OG gerada durante o build.

## Comentários (Giscus)

1. Crie uma discussão no repositório desejado.
2. Copie os IDs exibidos no configurador do [giscus.app](https://giscus.app/).
3. Preencha `.env` (veja `.env.example`):
   ```
   PUBLIC_GISCUS_REPO=owner/repo
   PUBLIC_GISCUS_REPO_ID=...
   PUBLIC_GISCUS_CATEGORY=Announcements
   PUBLIC_GISCUS_CATEGORY_ID=...
   ```

Sem as variáveis o componente renderiza uma mensagem pedindo a configuração.

## Busca (Pagefind)

O índice é criado dentro de `dist/pagefind/`. A interface é carregada automaticamente no layout e respeita o `base` (`/blog`).

## Deploy

- Railway, GitHub Pages, Cloudflare Pages ou similares funcionam bem (site totalmente estático).
- Garanta que o comando `npm run build` seja executado no pipeline.
- Faça upload do diretório `dist/` gerado.

## Checklist pós-deploy

- `/blog/rss.xml` carregando os posts.
- `/blog/sitemap-index.xml` listado (verifique no Search Console).
- `/blog/pagefind/` presente (busca funcionando).
- Variáveis do Giscus preenchidas corretamente.
