# monquero.dev.br

Portfolio profissional de Douglas Monquero, com foco em projetos web e experimentos front-end.

- Site: [https://www.monquero.dev.br](https://www.monquero.dev.br)
- Blog: [https://www.monquero.dev.br/blog](https://www.monquero.dev.br/blog)

## Visao geral

O projeto reune:
- Landing page em HTML/CSS/JS estatica servida pelo Apache/Railway.
- Blog em [Astro](https://astro.build/) hospedado no mesmo dominio, com posts em Markdown, busca Pagefind, comentarios Giscus e feed RSS.
- Automatizacao de build para gerar o blog e publica-lo dentro do diretorio `dist/blog`.

## Scripts

```bash
# roda o server de desenvolvimento do portfolio
npm run dev

# gera o blog e copia o build estatico para dist/blog
npm run build

# usado em producao (Railway) para compilar e servir a pasta dist
npm start
```

## Estrutura

- `assets/` — imagens e icones do portfolio.
- `src/` — codigo-fonte do site principal.
- `blog-app/` — projeto Astro do blog (`src/content/posts/*.md` para novos artigos).
- `dist/` — artefatos finais para deploy, com o portfolio na raiz e o blog em `/blog`.

## Contribuindo / Roadmap

Sugestoes sao bem-vindas! Abra uma issue ou envie um PR com melhorias de conteudo, acessibilidade ou performance.
