# Leonardo Dariva — Developer Portfolio V2

Portfólio profissional focado na carreira de desenvolvimento front-end de Leonardo Dariva. A experiência combina uma direção visual editorial com evidências técnicas: projetos reais, decisões de arquitetura, stack, testes e experiência profissional.

## Tecnologias

- Next.js 16 (App Router)
- React 19
- TypeScript em modo strict
- Tailwind CSS 4
- CSS responsivo com temas claro e escuro
- Metadata API, Open Graph, sitemap, robots e manifest

## Executar localmente

Requisitos: Node.js 22 ou superior e npm 10 ou superior.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Verificação

```bash
npm run typecheck
npm run lint
npm run build
```

## Estrutura

- `app/`: páginas, rotas de case, currículo e SEO
- `components/`: componentes de interface compartilhados
- `data/site.ts`: fonte única para projetos, stack, experiência e links
- `public/`: arquivos estáticos

Para adicionar um novo projeto, inclua um objeto no array `projects` em `data/site.ts`. A listagem, a rota de case e o sitemap são atualizados a partir da mesma fonte.

## Deploy na Vercel

1. Publique este repositório no GitHub.
2. Importe o repositório na Vercel.
3. Use as configurações detectadas automaticamente para Next.js.
4. A URL da Vercel é detectada automaticamente. Para usar um domínio próprio como URL canônica, defina `NEXT_PUBLIC_SITE_URL` no projeto da Vercel.

Nenhuma variável de ambiente é obrigatória para a versão atual. Consulte `.env.example` para a configuração opcional do domínio.
