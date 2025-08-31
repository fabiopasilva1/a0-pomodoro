# 🔒 Configuração de Branch Protection - Chronos Pomodoro

Este documento descreve as configurações de proteção de branch aplicadas ao repositório para manter a qualidade e estabilidade do projeto.

## 🎯 Configurações Aplicadas na Branch `main`

### Proteções Básicas
- ✅ **Require pull request reviews before merging**
  - Required approving reviews: 1
  - Dismiss stale reviews: Enabled
  - Require review from code owners: Enabled (se houver CODEOWNERS)

### Verificações de Status
- ✅ **Require status checks to pass before merging**
  - Build checks (se houver CI/CD configurado)
  - Lint checks

### Restrições Adicionais
- ✅ **Restrict pushes that create files**
- ✅ **Require branches to be up to date before merging**
- ✅ **Include administrators** (apply rules to admins too)
- ❌ **Allow force pushes** (disabled for safety)
- ❌ **Allow deletions** (disabled for safety)

## 🛠️ Como Configurar (Para Administradores)

### Via Interface Web do GitHub:

1. Vá para `Settings` → `Branches`
2. Clique em `Add protection rule`
3. Digite `main` no campo "Branch name pattern"
4. Configure as seguintes opções:

#### Protect matching branches:
- [x] Require pull request reviews before merging
  - [x] Required approving reviews: 1
  - [x] Dismiss stale pull request reviews when new commits are pushed
  - [x] Require review from code owners

- [x] Require status checks to pass before merging
  - [x] Require branches to be up to date before merging

- [x] Require conversation resolution before merging

- [x] Include administrators

- [ ] Allow force pushes (manter desmarcado)
- [ ] Allow deletions (manter desmarcado)

### Via GitHub CLI:

```bash
# Exemplo de comando para configurar proteção
gh api repos/:owner/:repo/branches/main/protection \
  --method PUT \
  --field required_status_checks='{}' \
  --field enforce_admins=true \
  --field required_pull_request_reviews='{"required_approving_review_count":1,"dismiss_stale_reviews":true}' \
  --field restrictions=null
```

## 📋 Verificação da Configuração

Para verificar se as proteções estão ativas:

```bash
# Via GitHub CLI
gh api repos/fabiopasilva1/chronos-pomodoro/branches/main/protection

# Via interface web
# Vá para Settings → Branches e verifique as regras aplicadas
```

## 🔍 Monitoramento e Auditoria

### Logs de Proteção
- Todas as tentativas de bypass são logadas
- Histórico de mudanças nas regras de proteção
- Auditoria de quem aprovou/rejeitou PRs

### Alertas Automáticos
- Notificações quando regras são alteradas
- Alertas para tentativas de force push
- Logs de atividade suspeita

## 🚨 Casos de Emergência

### Bypass Temporário (Apenas Owner)
Em casos de emergência crítica, o owner pode:

1. Temporariamente desabilitar a proteção
2. Fazer a alteração necessária
3. **IMEDIATAMENTE** reabilitar a proteção
4. Documentar o motivo no issue/commit

```bash
# NUNCA faça isso sem documentar o motivo
# Apenas para emergências críticas de produção
git push --force origin main  # (APÓS desabilitar proteção)
```

## ✅ Benefícios da Proteção

1. **Qualidade**: Todo código passa por revisão
2. **Segurança**: Previne alterações maliciosas ou acidentais
3. **Colaboração**: Processo transparente e documentado
4. **Estabilidade**: Reduz chances de quebras em produção
5. **Aprendizado**: Code reviews melhoram o conhecimento da equipe

## 📚 Recursos Adicionais

- [GitHub Branch Protection Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
- [Best Practices for Branch Protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule)

---

**Última atualização**: $(date)
**Responsável**: @fabiopasilva1