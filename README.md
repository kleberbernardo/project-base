## 🚀 Project Base

Este projeto foi cuidadosamente criado para servir como uma base sólida para desenvolvedores que buscam começar seus projetos futuros com uma vantagem. Ele vem pré-configurado com várias ferramentas essenciais, eliminando a necessidade de passar horas na fase inicial de configuração. O objetivo é proporcionar uma transição suave para o desenvolvimento real, assegurando que as melhores práticas e convenções sejam seguidas desde o início.

## 🛠️ Ferramentas

- **Next.js**: Um framework React que oferece recursos como renderização do lado servidor e geração estática para aplicações web modernas.

- **ESLint**: Ferramenta de linting que identifica e reporta padrões encontrados no código ECMAScript/JavaScript. Esta configuração segue o padrão do Airbnb, o que ajuda a manter um código mais consistente e a evitar certos tipos de bugs.

- **Prettier**: Um formatador de código opinativo que garante que todo o código tenha um estilo consistente.

- **Husky**: Utilizado para garantir a integridade do código ao automatizar tarefas usando ganchos (hooks) do git, como o pre-commit, para garantir que cada commit atenda a padrões específicos antes de ser efetivado.

## 📝 Instalando do zero ou em um projeto já existente

Se você desejar instalar em um projeto já existente, deixarei os passos abaixo para instalação e configuração, é bem simples.

Obs: Essa configuração é para um projeto em NextJs.

**Instale os plugins abaixo no VSCode:**

- ESLint

- Atenção: O plugin Prettier - Code formatter não é necessário no VSCode.

**Digite o comando abaixo para instalar todas as dependências necessárias:**

```bash
  npm i --save-dev husky @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-prettier prettier
```

**Renomeie o arquivo .eslint.json para .eslint.js e adicione o conteúdo abaixo:**

Basicamente, você está apontando as bibliotecas do airbnb, apontando configurações do tsconfig, ignorando analise do Eslint nesse js, importando e configurando a biblioteca de ordenação de imports, adicionando regras do prettier, regras do tailwindcss e adicionando regras para o Eslint ignorar algumas questões do NextJs.

Você pode adicionar mais regras sempre que desejar nas **rules**.

```javascript
module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals', 
    'airbnb', 
    'airbnb-typescript', 
    'plugin:@typescript-eslint/recommended', 
    'prettier'
  ],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['eslint-plugin-import-helpers', 'prettier'],
  rules: {
    'prettier/prettier': ['error', {
      'printWidth': 80,
      'tabWidth': 2,
      'useTabs': false,
      'singleQuote': true,
      'trailingComma': 'all',
      'bracketSpacing': true,
      'bracketSameLine': true,
      'rangeStart': 0,
      'insertPragma': false,
      'arrowParens': 'always',
      'quoteProps': 'as-needed',
      'semi': true,
      'endOfLine': 'auto',
      'proseWrap': 'preserve'
    }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/', '/^redux/'],
          'module',
          '/^@shared/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  }
};
```

**Crie o arquivo tsconfig.eslint.json e adicione o conteúdo abaixo:**

Aqui estamos apontando o arquivo tsconfig ao Eslint e falando que tipo de extensão e onde ele deve procurar arquivos para corrigir.

```json
{
  "extends": "./tsconfig.json",
  "include": ["**/*.tsx"]
}
```

**Adicione as linhas abaixo no arquivo setting.json do seu VSCode:**

Isso irá fazer o prettier funcionar junto com o Eslint ao salvar o código.

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": ["source.formatDocument", "source.fixAll.eslint"]
}
```

**Valide se está tudo bem configurado:**

Abra e feche seu VSCode para que as configurações se apliquem corretamente.

Execute o comando abaixo na raiz do seu projeto para o Eslint varrer seu projeto em busca de inconsistências.

```bash
 npx eslint . --ext .tsx
```

No caso, como uso tudo em .tsx, me preocupo apenas com esses arquivos.

Se tiver inconsistências, você terá um retorno nesse comando informando os erros e arquivos, corrija para ficar tudo redondo.

**Inicialize o Husky:**

O Husky é o cara que verifica se algo está errado antes de ser comitado, seja verificando se tem erro de Eslint, tests e etc.

Execute o comando abaixo para inicializar o projeto husky:

```bash
 npx husky install
```

Depois o comando abaixo para adicionar no package.json para ativar os gatilhos do Git

```bash
 npm pkg set scripts.prepare="husky install"
```

Agora vamos adicionar o gatilho do Eslint como pre-commit, poderia ser mais comandos como pré tests, checagens e etc.

```bash
 npx husky add .husky/pre-commit "npm run lint"
 git add .husky/pre-commit
```

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

[⬆ Voltar ao topo](#chathub)<br>
