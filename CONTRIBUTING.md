# 🤝 Política de Contribuição - Chronos Pomodoro

Obrigado pelo seu interesse em contribuir com o **Chronos Pomodoro**! 🍅✨

Este documento contém todas as diretrizes e informações necessárias para contribuir de forma efetiva com o projeto.

## 📋 Índice

- [Política de Branch Protection](#política-de-branch-protection)
- [Como Contribuir](#como-contribuir)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Padrões de Código](#padrões-de-código)
- [Processo de Pull Request](#processo-de-pull-request)
- [Reportando Issues](#reportando-issues)
- [Código de Conduta](#código-de-conduta)
- [Tipos de Contribuição](#tipos-de-contribuição)

## 🔒 Política de Branch Protection

### Branch Principal Protegida

**Sim, a branch `main` está protegida** para garantir a qualidade e estabilidade do projeto. Isso significa que:

#### ❌ **NÃO é possível:**
- Fazer push direto para a branch `main`
- Mergear sem revisão
- Forçar push (`git push --force`)
- Deletar a branch `main`

#### ✅ **O que VOCÊ PODE fazer:**
- Criar branches a partir da `main`
- Submeter Pull Requests
- Contribuir através do processo de revisão
- Reportar issues e sugerir melhorias

### Por que a Branch Main está Protegida?

1. **Qualidade**: Garante que todo código passa por revisão antes do merge
2. **Estabilidade**: Evita quebras na versão de produção
3. **Colaboração**: Facilita o trabalho em equipe com processos claros
4. **Histórico**: Mantém um histórico limpo e rastreável

### Regras de Proteção Aplicadas

- 🔍 **Revisão obrigatória**: Pull Requests devem ser aprovados pelo mantenedor
- ✅ **Verificações obrigatórias**: Lint e build devem passar
- 🚫 **Sem force push**: Histórico é preservado
- 👨‍💼 **Apenas administradores**: Somente o owner pode fazer bypass (emergências)

### Como Contribuir Corretamente

```bash
# 1. Fork o repositório no GitHub
# 2. Clone seu fork
git clone https://github.com/SEU_USUARIO/chronos-pomodoro.git

# 3. Crie uma branch para sua contribuição  
git checkout -b feature/minha-contribuicao

# 4. Faça suas alterações e commits
git add .
git commit -m "feat: adiciona nova funcionalidade"

# 5. Push para SEU fork
git push origin feature/minha-contribuicao

# 6. Abra um Pull Request no GitHub
```

> 💡 **Dica**: Este processo de proteção existe para **ajudar** todos os contribuidores, não para dificultar. Ele garante que o projeto mantenha alta qualidade e funcione corretamente para todos os usuários.

## 🚀 Como Contribuir

### 1. Fork e Clone

```bash
# 1. Faça um fork do repositório no GitHub
# 2. Clone seu fork localmente
git clone https://github.com/SEU_USUARIO/chronos-pomodoro.git
cd chronos-pomodoro

# 3. Adicione o repositório original como upstream
git remote add upstream https://github.com/fabiopasilva1/chronos-pomodoro.git
```

### 2. Mantenha seu Fork Atualizado

```bash
# Antes de iniciar qualquer trabalho, sincronize com o upstream
git checkout main
git pull upstream main
git push origin main
```

### 3. Crie uma Branch para sua Contribuição

```bash
# Use nomes descritivos para suas branches
git checkout -b feature/nova-funcionalidade
# ou
git checkout -b fix/correcao-bug
# ou
git checkout -b docs/atualizacao-documentacao
```

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- **Node.js** 18+ 
- **npm** ou **pnpm** (recomendado)
- **Git**

### Instalação

```bash
# 1. Instale as dependências
npm install
# ou se preferir pnpm
pnpm install

# 2. Execute o projeto em modo de desenvolvimento
npm run dev

# 3. Abra http://localhost:5173 no seu navegador
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Build e Produção
npm run build        # Compila o projeto para produção
npm run preview      # Visualiza o build de produção

# Qualidade de Código
npm run lint         # Executa o ESLint
npm run lint:fix     # Corrige automaticamente problemas do ESLint
```

## 📏 Padrões de Código

### Linguagem e Comentários

- **Código**: Variáveis, funções e comentários técnicos em **inglês**
- **Interface/UX**: Textos da interface em **português brasileiro**
- **Documentação**: **Português brasileiro**

```typescript
// ✅ BOM
function handleCreateNewTask() {
  showMessage.success('Tarefa iniciada'); // UI em português
}

// ❌ EVITAR
function criarNovaTarefa() {
  showMessage.success('Task started'); // Inconsistente
}
```

### Estrutura de Arquivos

```
src/
├── components/          # Componentes reutilizáveis
├── pages/              # Páginas/telas da aplicação
├── contexts/           # Context API do React
├── utils/              # Funções utilitárias
├── styles/             # Estilos globais e temas
├── adapters/           # Adaptadores para bibliotecas externas
├── models/             # Tipos e interfaces TypeScript
└── workers/            # Web Workers
```

### Convenções de Nomenclatura

- **Componentes**: PascalCase (`MainForm`, `DefaultButton`)
- **Arquivos**: Mesma convenção do conteúdo
- **Funções**: camelCase (`handleSubmit`, `formatDate`)
- **Constantes**: UPPER_SNAKE_CASE (`TASK_TYPES`)
- **CSS Classes**: kebab-case (`form-row`, `button-primary`)

### CSS e Estilização

- Utilize **CSS Modules** ou **classes CSS simples**
- Siga as **variáveis CSS** definidas em `src/styles/theme.css`
- **Responsividade** é importante
- **Modo escuro/claro** deve ser suportado

```css
/* ✅ Use as variáveis do tema */
.button {
  background-color: var(--primary);
  color: var(--text-over-primary);
}

/* ❌ Evite cores hardcoded */
.button {
  background-color: #0da170;
  color: #0a0f1a;
}
```

## 🔄 Processo de Pull Request

> ⚠️ **Importante**: A branch `main` está protegida. Todas as contribuições devem passar pelo processo de Pull Request descrito abaixo.

### Antes de Enviar

1. **Teste seu código**: Certifique-se que tudo funciona
2. **Execute o lint**: `npm run lint`
3. **Build o projeto**: `npm run build`
4. **Commits limpos**: Use mensagens descritivas

### Formato de Commit

```bash
# Convenção: tipo: descrição concisa
git commit -m "feat: adiciona timer customizável"
git commit -m "fix: corrige bug na contagem de ciclos"
git commit -m "docs: atualiza README com novos recursos"
git commit -m "style: melhora responsividade do layout"
```

**Tipos de commit:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Mudanças de estilo/layout
- `refactor`: Refatoração de código
- `test`: Adiciona ou modifica testes
- `chore`: Manutenção geral

### Template de Pull Request

```markdown
## 📝 Descrição

Descreva brevemente as mudanças realizadas.

## 🎯 Tipo de Mudança

- [ ] 🐛 Bug fix
- [ ] ✨ Nova funcionalidade  
- [ ] 💄 Mudança de estilo/UI
- [ ] 📚 Documentação
- [ ] ♻️ Refatoração
- [ ] 🧪 Testes

## 🧪 Como Testar

1. Passos para testar as mudanças
2. Cenários específicos a verificar
3. Screenshots (se aplicável)

## 📋 Checklist

- [ ] Testei as mudanças localmente
- [ ] Executei `npm run lint` sem erros
- [ ] Executei `npm run build` com sucesso
- [ ] A documentação foi atualizada (se necessário)
- [ ] As mudanças seguem os padrões do projeto
```

## 🐛 Reportando Issues

### Antes de Reportar

1. **Verifique se já existe**: Procure por issues similares
2. **Reproduza o problema**: Certifique-se que é consistente
3. **Colete informações**: Browser, versão do Node, SO, etc.

### Template de Issue

```markdown
## 🐛 Descrição do Bug

Descrição clara e concisa do problema.

## 🔄 Passos para Reproduzir

1. Vá para '...'
2. Clique em '...'
3. Veja o erro

## 📱 Comportamento Esperado

Descreva o que deveria acontecer.

## 📷 Screenshots

Se aplicável, adicione screenshots.

## 🖥️ Ambiente

- **SO**: [ex: Windows 10, macOS, Ubuntu]
- **Browser**: [ex: Chrome 120, Firefox 119]
- **Versão do Node**: [ex: 18.17.0]
- **Resolução**: [ex: 1920x1080]

## ℹ️ Informações Adicionais

Qualquer contexto adicional sobre o problema.
```

## 👥 Código de Conduta

### Nossos Valores

- **Respeito**: Trate todos com cortesia e profissionalismo
- **Inclusão**: Seja acolhedor a pessoas de todas as origens
- **Colaboração**: Trabalhe junto para o bem do projeto
- **Construtividade**: Dê feedback útil e específico

### Comportamentos Esperados

- ✅ Use linguagem acolhedora e inclusiva
- ✅ Respeite diferentes pontos de vista
- ✅ Aceite críticas construtivas
- ✅ Foque no que é melhor para a comunidade
- ✅ Seja paciente com iniciantes

### Comportamentos Inaceitáveis

- ❌ Linguagem ofensiva ou discriminatória
- ❌ Ataques pessoais ou políticos
- ❌ Assédio público ou privado
- ❌ Publicar informações privadas de outros
- ❌ Trolling ou comentários provocativos

## 🎨 Tipos de Contribuição

### 🔧 Desenvolvimento

- Novas funcionalidades
- Correções de bugs
- Melhorias de performance
- Refatoração de código

### 📚 Documentação

- Melhorias no README
- Comentários no código
- Tutoriais e guias
- Traduções

### 🎨 Design/UX

- Melhorias na interface
- Experiência do usuário
- Acessibilidade
- Responsividade

### 🧪 Testes

- Testes unitários
- Testes de integração
- Testes manuais
- Relatórios de bugs

### 💡 Ideias e Sugestões

- Novas funcionalidades
- Melhorias no fluxo
- Otimizações
- Feedback geral

## 🏷️ Labels de Issues

- `bug` - Problema no código
- `enhancement` - Nova funcionalidade
- `documentation` - Melhorias na documentação
- `good first issue` - Bom para iniciantes
- `help wanted` - Precisa de ajuda da comunidade
- `question` - Dúvida ou discussão
- `wontfix` - Não será implementado

## 📞 Contato

Se tiver dúvidas sobre como contribuir:

- **Issues**: Para perguntas técnicas e discussões
- **Discussions**: Para ideias e conversas mais amplas

## 🙏 Reconhecimento

Todas as contribuições são valorizadas e reconhecidas! Os contribuidores serão listados no projeto e terão nosso sincero agradecimento.

---

**Obrigado por tornar o Chronos Pomodoro ainda melhor!** 🍅✨