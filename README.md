Este é um projeto [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Começando

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:8080](http://localhost:8080) com seu navegador para ver o resultado.

Você pode começar a editar a página modificando `src/pages/index.tsx`. A página é atualizada automaticamente conforme você salva os arquivos.

## Estrutura geral de pastas:
```
├───public
│   ├───favicons
│   ├───files
│   ├───fonts
│   │   ├───Nexa
│   │   └───SFProDisplay
│   └───videos
└───src
    ├───assets
    │   ├───footer
    │   ├───header
    │   └───hero
    ├───components
    │   ├───Box
    │   ├───Button
    │   ├───Footer
    │   ├───Grid
    │   ├───Header
    │   ├───Lightbox
    │   ├───Select
    │   ├───SwiperBullets
    │   ├───Text
    │   ├───Textarea
    │   └───TextField
    ├───container
    │   └───Hero
    ├───forms
    │   ├───Chat
    │   ├───Contact
    │   ├───Email
    │   ├───Phone
    │   └───WhatsApp
    ├───helpers
    ├───Layout
    ├───pages
    └───theme
```
  ## Explicação do conteúdo de cada uma delas:
```
├─── public
│   ├─── favicons
│   ├─── files
│   ├─── fonts
│   │   ├─── Nexa
│   │   └─── SFProDisplay
│   └─── videos
```

No public, temos a pasta favicons, onde eles foram gerados a partir do site [Favicon.ico & App Icon Generator](https://www.favicon-generator.org/) para serem compatíveis com todos os tipos de devices.

Em files, entram os arquivos que serão baixados pelos usuários na aplicação.

Em fonts, estão as fontes que não constam no [Google Fonts](https://fonts.google.com/) e precisam ser geradas manualmente.

Em videos, ficam os arquivos `.mp4` da aplicação.

=======================================================================

## src
```
└─── src
    ├─── assets
    │   ├─── footer
    │   ├─── header
    │   └─── hero
    ├─── helpers
    ├─── Layout
    ├─── pages
    └─── theme
```
=======================================================================

├─── assets

Em assets, ficam as imagens do projeto. Separadas por pastas com o nome da seção em que elas serão utilizadas, para facilitar a busca.

`index.ts`
Neste arquivo que está dentro de cada pasta, é feita a exportação das imagens.

=======================================================================

├─── helpers

Em helpers, estão funções base da aplicação.

`index.ts`
Neste arquivo que está dentro da pasta, é feita a exportação global das funcionalidades.

=======================================================================

├─── Layout

Configurações base da aplicação como head e body.

###### HEAD
- title;
- metatags;
- favicons;
- fonts;

###### BODY
- Header (Componente Menu/Navigation);
- Footer (Componente Footer);
- Children (Espera o conteúdo que será passado dentro de sua tag quando for chamado em algum lugar)

=======================================================================

├─── pages

Onde fica o index para chamar todas as seções.

=======================================================================

└─── theme

Configuração global de tamanhos, cores e tipografias definidas no design do projeto. Normalmente essas informações estão no Figma.

=======================================================================
## Components:
```
 ├─── components
    │   ├─── Box
    │   ├─── Button
    │   ├─── Footer
    │   ├─── Grid
    │   ├─── Header
    │   ├─── Lightbox
    │   ├─── Select
    │   ├─── SwiperBullets
    │   ├─── Text
    │   ├─── Textarea
    │   └─── TextField
```
Em components, estão os componentes do projeto para serem reaproveitados ao longo da aplicação. Aqui vai uma breve explicação de cada um deles:

├─── Box

É um componente para envolver algo que precise de alguma estilização rápida e que possa ser feita inline.

=======================================================================

├─── Button

Componente global dos botões utilizados na aplicação e seus respectivos estados.

=======================================================================

├─── Footer

Seção componentizada com seus textos e imagens, pois será utilizada em Layout pois aparece em todas as páginas do projeto.

=======================================================================

├─── Grid

Inicialmente temos apenas o `Container` para utilizar nas seções. Ele ajuda a delimitar o espaço ocupado por elas, deixando centralizada na tela.

=======================================================================

├─── Header

Seção superior da aplicação, com a logo do empreendimento e o navigation que levará para cada seção clicada.

=======================================================================

├─── Lightbox

Utilizado para seções com a necessidade de abertura de zoom da galeria de imagens, como um botão "expandir".

=======================================================================

├─── Select

Componente baseado no [Formik](https://formik.org/docs/overview) utilizado nos forms.

=======================================================================

├─── SwiperBullets

Nele está a estrutura do swipper, para ser utilizado e configurado com as propriedades necessárias em cada seção.

=======================================================================

├─── Text

Componente de texto, configurado de acordo com a tipografia e o thema da aplicação, para facilitar a estilização dos títulos e textos em geral.

Nele temos as props `variant` e `as`:

`variant` são as typographys criadas no theme. Caso crie alguma typograpy que não tenha declarada no componente, deve declarar a mesma para funcionar.

`as` são as tags html para declarar a hierarquia dos títulos e textos. Por default é a tag P.

```
<Text as="h2" variant="h2Desktop">Lorem ipsum</Text>
```

=======================================================================

├─── Textarea

Componente baseado no [Formik](https://formik.org/docs/overview) utilizado nos forms.

=======================================================================

└─── TextField

Componente `input` baseado no [Formik](https://formik.org/docs/overview) utilizado nos forms.

=======================================================================

## Container:
```
 ├─── container
    │   └─── Hero
```
 Essa é a pasta onde ficarão todas as seções, com o seu arquivo `*.tsx` (com todas as funções e lógicas), styles (com a estilização) e index (para a exportação do arquivo).


## Forms:
```
 ├─── forms
    │   ├─── Chat
    │   ├─── Contact
    │   ├─── Email
    │   ├─── Phone
    │   └─── WhatsApp
```
Nessa pasta estão os formulários separados por cada tipo de contato, com seus determinados campos e validações, para serem chamados nos respectivos modais ou seção.

##
##

## Saber mais

Para saber mais sobre o Next.js, consulte os seguintes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - saiba mais sobre os recursos e a API do Next.js.
- [Learn Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - seus comentários e contribuições são bem-vindos!

## Deploy na Vercel

A maneira mais fácil de implantar seu aplicativo Next.js é usar a [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa documentação de implantação [Next.js deployment documentation](https://nextjs.org/docs/deployment) para obter mais detalhes.
