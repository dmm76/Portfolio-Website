---
title: "Como este blog em Astro foi montado"
description: "Um resumo das peças principais: Content Collections, Pagefind, Giscus, RSS e open graph automáticos."
pubDate: 2024-10-21
tags:
  - astro
  - tecnologia
  - tutorial
draft: false
---

Montei este blog para ser rápido de atualizar e fácil de hospedar na Railway. Seguem os principais pontos da stack:

1. **Content Collections** garantem que cada post tenha título, descrição, datas e tags validadas.
2. **Pagefind** gera a busca local automaticamente depois do build.
3. **RSS** e `sitemap.xml` são criados na mesma etapa, ajudando leitores e robôs.
4. **Giscus** entrega comentários com login GitHub (os dados ficam no repositório).
5. Uma rota dedicada gera imagens **Open Graph** com o título do post.

O código está organizado para que novos posts sejam adicionados apenas criando um novo arquivo Markdown em `src/content/posts/`. A partir daí o build cuida de todo o resto.
