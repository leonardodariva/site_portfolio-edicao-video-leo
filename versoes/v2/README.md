# Leonardo Dariva — V2 japonesa

Esta versão é um conceito visual independente, com layout editorial, tipografia condensada e atmosfera japonesa sombria. A versão Next.js anterior permanece em `../antiga` e na raiz do repositório.

## Visualização local

Na pasta do projeto, rode um servidor HTTP estático, por exemplo:

```bash
python3 -m http.server 3000 --directory dist
```

Depois abra `http://localhost:3000`.

## Conteúdo e integração

1. Publique `dist/` como site estático ou adapte seus componentes para a aplicação desejada.
2. Substitua os placeholders de `media-card` pelos vídeos e artes reais, preservando `aspect-ratio` 9:16, 16:9 e 1:1.
3. Os botões de contato e o briefing abrem o aplicativo de e-mail do visitante. Caso queira envio direto no site, conecte `#contact-form` a um serviço de formulário.
4. Mantenha `assets/pagoda-hero.png` como background do hero ou troque por um asset próprio com direitos de uso.

Os textos e cards demonstrativos estão marcados como demo/placeholder e não afirmam clientes, métricas ou credenciais.
