# Site de Formatura · Laura Berres Friedrich

Um site estático, sem banco de dados e sem build: é só publicar a pasta.

## Onde editar

Tudo fica em **`config.js`**: nome, data, local, textos do convite, RSVP, fotos, lista de presentes e Pix.
Os campos marcados com `⚠ PROVISÓRIO` são o nome do recebedor e a cidade do Pix.

| O que | Onde, dentro de `config.js` |
|---|---|
| Nome, curso e ano | `formanda` |
| Data, horário, local, endereço e link do Maps | `evento` |
| Texto do convite, RSVP e WhatsApp | `convite` |
| Fotos e legenda | `fotos` (os arquivos ficam em `/img`) |
| Chave Pix, recebedor e cidade | `pix` |
| Presentes e valores | `presentes`: copie uma linha para adicionar e apague para remover |

## Como trocar imagens

Substitua o arquivo em `/img` mantendo o mesmo nome:

- `laura-jaleco.jpg` e `laura-beca.jpg`: as fotos. O enquadramento é ajustado em `config.js → fotos → foco`.
- `hortensia.webp`, `copo-de-leite.webp`, `copo-de-leite-2.webp`, `lirio.webp`, `folha.webp`, `flor-bordo.webp` e `selo.webp`: as ilustrações do Canva.

> **Recomendado:** as flores vieram do Canva em resolução baixa. Para ficarem mais nítidas, abra o design no Canva, selecione cada flor e use **Compartilhar → Baixar → PNG com fundo transparente**. Depois salve com o nome correspondente; pode ser `.png`, mas aí troque a extensão no `index.html`.

## Publicar na Vercel (link público, sem login para os convidados)

**Opção 1: GitHub (recomendado; cada alteração publica sozinha)**

1. Crie um repositório no GitHub e envie todos os arquivos desta pasta. No site do GitHub dá para arrastar os arquivos em *Add file → Upload files*.
2. Em vercel.com, clique em **Add New → Project → Import** e escolha o repositório.
3. Em *Framework Preset*, escolha **Other**. Não precisa de build. Depois clique em **Deploy**.

**Opção 2: Vercel CLI**

```bash
npm i -g vercel
cd pasta-do-site
vercel --prod
```

Em *Settings → Domains* você pode trocar o endereço, por exemplo `laura-formatura.vercel.app`.

## Como funciona o Pix

- A chave só aparece na janela que abre ao tocar em **Presentear**.
- **Copiar chave Pix** usa a API de área de transferência do navegador. Se ela falhar, o site usa um método alternativo; se também falhar, ele seleciona a chave para o convidado copiar manualmente.
- **Pix Copia e Cola** (alternativa): o código é gerado no próprio navegador, no padrão do Banco Central, já com o valor do presente. Para desligar, use `copiaEColaAtivo: false`.
- Nenhum presente é marcado como pago, porque o site não recebe confirmação do banco.

Antes de divulgar, faça um teste: copie o código de um presente e cole no app do seu banco. Confira se o nome e o valor aparecem certos, mas não conclua o pagamento.

## Detalhes

- Um link direto para uma seção pula a abertura do envelope, por exemplo `…/#presentes`.
- O site respeita a configuração "reduzir movimento" do celular.
- Fontes do convite no Canva: Imperial Script (caligrafia) e Noto Serif (textos), licença SIL Open Font License, hospedadas na pasta `/fonts`.
