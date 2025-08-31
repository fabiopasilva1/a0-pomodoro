# 🍅 A0 Pomodoro

**A0 Pomodoro** é uma aplicação web moderna para gerenciamento de tempo baseada
na técnica Pomodoro. Desenvolvida com React, TypeScript e Vite, oferece uma
experiência fluida e personalizável para aumentar sua produtividade.

## ✨ Funcionalidades

- ⏱️ **Timer Personalizável**: Configure tempos de foco, descanso curto e longo
- 📝 **Gerenciamento de Tarefas**: Crie e acompanhe suas tarefas
- 📊 **Histórico Completo**: Visualize seu progresso e estatísticas
- 🎨 **Tema Escuro/Claro**: Interface adaptável ao seu ambiente
- 🔔 **Notificações**: Alertas sonoros e visuais para transições
- 📱 **Responsivo**: Funciona perfeitamente em desktop e mobile
- ⚙️ **Configurações Flexíveis**: Adapte a aplicação às suas necessidades

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 18+
- npm ou pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/fabiopasilva1/a0-pomodoro.git
cd a0-pomodoro

# Instale as dependências
npm install
# ou
pnpm install

# Execute o projeto
npm run dev
# ou
pnpm dev
```

Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## 🛠️ Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Compila o projeto para produção
npm run preview  # Visualiza o build de produção
npm run lint     # Executa o ESLint
```

## 🤝 Contribuindo

Adoramos contribuições! Leia nosso [Guia de Contribuição](CONTRIBUTING.md) para
saber como participar do desenvolvimento do projeto.

### Formas de Contribuir

- 🐛 Reportar bugs
- ✨ Sugerir novas funcionalidades
- 📝 Melhorar documentação
- 🎨 Aprimorar a interface
- 🔧 Contribuir com código

> **🔒 Nota sobre Branch Protection**: A branch `main` está protegida. Todas as
> contribuições devem ser feitas através de Pull Requests. Veja nossa
> [documentação completa](.github/BRANCH_PROTECTION.md) para mais detalhes.

## 📖 Sobre a Técnica Pomodoro

A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por
Francesco Cirillo. Consiste em:

1. **25 minutos** de foco total em uma tarefa
2. **5 minutos** de pausa curta
3. Após 4 ciclos, uma **pausa longa** de 15-30 minutos

### Nossos Diferenciais

- ⚙️ **Tempos Personalizáveis**: Ajuste os períodos conforme sua necessidade
- 🔄 **Ciclos Inteligentes**: Sequência automática entre foco e descanso
- 📈 **Acompanhamento**: Histórico detalhado do seu progresso

## 🏗️ Tecnologias

- **Frontend**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: CSS Modules + CSS Variables
- **Icons**: Lucide React
- **Notifications**: React Toastify
- **Routing**: React Router
- **Date Handling**: date-fns

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais
detalhes.

## 🙏 Agradecimentos

Agradecemos a todos os
[contribuidores](https://github.com/fabiopasilva1/a0-pomodoro/contributors)
que ajudam a tornar este projeto melhor!

---

**Feito com ❤️ para aumentar sua produtividade** 🚀

## 📚 Documentação Técnica

### Configuração do ESLint

Se você está desenvolvendo uma aplicação para produção, recomendamos atualizar a
configuração para habilitar regras de lint com consciência de tipos:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended e substitua por isso
    ...tseslint.configs.recommendedTypeChecked,
    // Alternativamente, use isso para regras mais rigorosas
    ...tseslint.configs.strictTypeChecked,
    // Opcionalmente, adicione isso para regras estilísticas
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // outras opções...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

Você também pode instalar
[eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
e
[eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)
para regras de lint específicas do React:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Adicione os plugins react-x e react-dom
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // outras regras...
    // Habilite suas regras typescript recomendadas
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
