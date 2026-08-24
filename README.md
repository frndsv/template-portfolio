# Portfólio Profissional

Site de portfólio bilíngue (PT/EN) e responsivo, com seções de Sobre Mim, Projetos, Experiências e Contato (com envio de e-mail via back-end próprio). Desenvolvido para o Laboratório 1 — Projeto de Software (PUC Minas, Engenharia de Software).

**Equipe:** Felipe Costa, Sofia Fernandes, Arthur Martins, Gustavo Leonardi

**Wireframes (Figma):** https://www.figma.com/design/DV5dIJR6QSNuIARWeF3Suw/Prototipo-Portfolio?node-id=0-1

**Site publicado:** https://portifoliomodelo-peach.vercel.app

## Tecnologias

- **[Next.js](https://nextjs.org/)** (App Router) — framework React fullstack, usado no front-end e no back-end (API Route de contato).
- **[React](https://react.dev/)** — biblioteca de UI.
- **[TypeScript](https://www.typescriptlang.org/)** — tipagem estática.
- **[Tailwind CSS](https://tailwindcss.com/)** — estilização utilitária, tema claro/escuro e responsividade.
- **[Resend](https://resend.com/)** — envio de e-mails a partir da API Route `/api/contact`.

## Estrutura de diretórios

```
src/
├── app/
│   ├── page.tsx            # página "Sobre Mim" (rota "/")
│   ├── projetos/            # timeline de projetos
│   ├── experiencias/        # histórico de experiências
│   ├── contato/              # formulário + canais de contato
│   └── api/contact/          # back-end: envia e-mail via Resend
├── components/               # Header, Footer, ícones, formulário...
├── context/                   # idioma (PT/EN) e tema (claro/escuro)
├── data/                       # textos (i18n), projetos e experiências
└── lib/                         # tipos e utilitários
```

## Como rodar localmente

Pré-requisitos: [Node.js 20+](https://nodejs.org/) e npm.

```bash
git clone <url-do-repositório>
cd portifolio_modelo
npm install

# opcional, só necessário para o formulário de contato
cp .env.example .env.local
# edite .env.local com sua RESEND_API_KEY e CONTACT_EMAIL_TO

npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de produção
npm run start   # roda o build de produção localmente
npm run lint    # checagem de lint
```

## Capturas de tela

| Sobre mim | Projetos |
| --- | --- |
| ![Página Sobre Mim](./docs/screenshots/sobre-mim.jpg) | ![Página Projetos](./docs/screenshots/projetos.jpg) |

| Experiências | Contato |
| --- | --- |
| ![Página Experiências](./docs/screenshots/experiencias.jpg) | ![Página Contato](./docs/screenshots/contato.jpg) |

## Créditos de imagens

Os projetos internos/privados usam imagens ilustrativas de terceiros (não são capturas de tela dos sistemas reais, que são de acesso restrito):

- `airflow-pipelines.png` — [documentação oficial do Apache Airflow](https://airflow.apache.org/docs/apache-airflow/stable/ui.html) (Apache License 2.0)
- `spark-pipeline-larga-escala.png` — [documentação oficial do Apache Spark](https://spark.apache.org/docs/latest/web-ui.html) (Apache License 2.0)
- `langchain-agentes-ia.png` — [Chatbot Arena main UI](https://commons.wikimedia.org/wiki/File:Chatbot_Arena_main_UI.png) (Wikimedia Commons, domínio público)
- `automacao-processos-ia.jpg` — [U.S. Air Force Robotics Process Automation Roadshow](https://commons.wikimedia.org/wiki/File:Air_Force%E2%80%99s_Robotics_Process_Automation_Roadshow_(8257962).jpg) (Wikimedia Commons, domínio público)
