# Leonardo Dariva — Portfólio audiovisual

Portfólio profissional focado em edição de vídeo, narrativa visual, motion, ritmo e acabamento. A seleção de trabalhos será atualizada com os vídeos produzidos por Leonardo.

## Duas versões

- [`versoes/antiga`](versoes/antiga/README.md): cópia independente do site Next.js que continua na raiz deste repositório. A raiz foi mantida para preservar o deploy existente.
- [`versoes/v2`](versoes/v2/README.md): novo conceito estático, com identidade japonesa sombria, preto e vermelho, pagode no hero e grades de trabalho em 9:16, 16:9 e 1:1. Os cards de trabalho são demonstrativos.

Para visualizar a V2 localmente: `python3 -m http.server 3000 --directory versoes/v2/dist` e abra `http://localhost:3000`.

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

## Organização

- `app/`: páginas do portfólio, currículo e metadados
- `components/`: elementos visuais compartilhados
- `data/site.ts`: textos, projetos audiovisuais, recursos e links
- `public/`: marca e imagens de apoio

Para adicionar um vídeo, inclua um novo objeto no array `projects` em `data/site.ts` e associe a capa, o vídeo e os materiais de apoio correspondentes.

Nenhuma variável de ambiente é obrigatória para a versão atual. Consulte `.env.example` para configurar o domínio e, opcionalmente, o número do WhatsApp com DDI e DDD. Sem esse número, o portfólio mostra apenas os canais de contato configurados.
