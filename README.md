# monquero.dev.br

Portfólio profissional de Douglas Monquero, com foco em projetos web e experimentos front-end.

- Site: [https://www.monquero.dev.br](https://www.monquero.dev.br)
- Blog: [https://www.monquero.dev.br/blog](https://www.monquero.dev.br/blog)

## Visão geral

O projeto reúne:
- Landing page em HTML/CSS/JS estático servida pelo Apache/Railway.
- Blog em [Astro](https://astro.build/) hospedado no mesmo domínio, com posts em Markdown, busca Pagefind, comentários Giscus e feed RSS.
- Automatização de build para gerar o blog e publicar dentro do diretório `blog/`.

## Scripts

```bash
# roda o server de desenvolvimento do portfólio
npm run dev

# gera o blog e copia o build estático para /blog
npm run build

# usado em produção (Railway) para servir a pasta /blog
npm start
```

## Estrutura

- `assets/` – imagens e ícones do portfólio.
- `src/` – código-fonte do site principal.
- `blog-app/` – projeto Astro do blog (`src/content/posts/*.md` para novos artigos).
- `blog/` – output gerado para deploy, criado via `npm run build`.

## Contribuindo / Roadmap

Sugestões são bem-vindas! Abra uma issue ou envie um PR com melhorias de conteúdo, acessibilidade ou performance.

