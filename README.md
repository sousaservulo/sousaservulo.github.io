# Sérvulo Sousa — Portfólio

Portfólio pessoal de desenvolvedor criado com React, TypeScript e Vite e publicado gratuitamente no GitHub Pages.

**Produção:** https://sousaservulo.github.io

## Tecnologias

- React
- TypeScript
- Vite
- CSS moderno
- ESLint
- GitHub Actions
- GitHub Pages

## Executar localmente

Requisito: Node.js 20.19 ou superior.

```bash
npm install
npm run dev
```

O Vite exibirá o endereço local, normalmente `http://localhost:5173`.

## Validar antes de publicar

```bash
npm run lint
npm run build
```

Para visualizar o build de produção:

```bash
npm run preview
```

## Estrutura principal

```text
.github/
└── workflows/
    └── deploy-pages.yml

public/
├── 404.html
├── curriculo-servulo-sousa.pdf
├── favicon.svg
├── og-image.png
├── robots.txt
├── site.webmanifest
└── sitemap.xml

src/
├── assets/
├── components/
├── data/
├── layouts/
├── pages/
├── sections/
├── types/
└── utils/
```

## Deploy

O workflow `.github/workflows/deploy-pages.yml` é executado automaticamente a cada push para `main` e também pode ser iniciado manualmente pela aba **Actions**.

O pipeline:

1. faz checkout do repositório;
2. configura Node.js 22;
3. instala as dependências com `npm install`;
4. executa o ESLint;
5. gera o build do Vite;
6. envia `dist/` como artefato do GitHub Pages;
7. publica o artefato no ambiente `github-pages`.

### Configuração inicial no GitHub

No repositório `sousaservulo/sousaservulo.github.io`:

1. acesse **Settings → Pages**;
2. em **Build and deployment → Source**, selecione **GitHub Actions**;
3. faça push da branch `main`;
4. acompanhe a execução em **Actions**;
5. após o deploy, acesse `https://sousaservulo.github.io`.

Como este é um site de usuário (`sousaservulo.github.io`), o Vite usa `base: '/'`.

## Atualizações futuras

Após a configuração inicial, alterações enviadas para `main` são publicadas automaticamente. Não é necessário versionar a pasta `dist/` no Git.

## Segurança

O projeto é público. Não devem ser adicionados senhas, tokens, chaves de API, credenciais de servidores ou outros segredos ao código-fonte.
