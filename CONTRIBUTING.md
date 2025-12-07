# Contributing to Block And Play

Obrigado pelo seu interesse em contribuir com o Block And Play! 🎮

## 📋 Tabela de Conteúdo

- [Código de Conduta](#código-de-conduta)
- [Como Posso Contribuir?](#como-posso-contribuir)
- [Guia de Desenvolvimento](#guia-de-desenvolvimento)
- [Padrões de Código](#padrões-de-código)
- [Processo de Pull Request](#processo-de-pull-request)

## Código de Conduta

Este projeto e todos os participantes devem aderir a um código de conduta respeitoso e inclusivo. Ao participar, você se compromete a:

- Usar linguagem acolhedora e inclusiva
- Respeitar diferentes pontos de vista e experiências
- Aceitar críticas construtivas graciosamente
- Focar no que é melhor para a comunidade

## Como Posso Contribuir?

### 🐛 Reportando Bugs

Antes de criar um relatório de bug, verifique se o problema já não foi reportado. Se você encontrar um bug:

1. Use um título claro e descritivo
2. Descreva os passos exatos para reproduzir o problema
3. Forneça exemplos específicos
4. Descreva o comportamento observado e o esperado
5. Inclua screenshots se aplicável

### 💡 Sugerindo Melhorias

Se você tem uma ideia para melhorar o projeto:

1. Use um título claro e descritivo
2. Forneça uma descrição detalhada da melhoria sugerida
3. Explique por que essa melhoria seria útil
4. Liste exemplos de como a funcionalidade funcionaria

### 🔨 Contribuindo com Código

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Faça suas alterações
4. Commit suas mudanças (`git commit -m 'feat: Add some AmazingFeature'`)
5. Push para a branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

## Guia de Desenvolvimento

### Configuração do Ambiente

```bash
# Clone o repositório
git clone https://github.com/Biannolimma/bap-site.git
cd bap-site

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Estrutura de Branches

- `main`: Branch de produção
- `develop`: Branch de desenvolvimento
- `feature/*`: Novas funcionalidades
- `fix/*`: Correções de bugs
- `docs/*`: Alterações na documentação

## Padrões de Código

### TypeScript

- Todo código deve ser tipado
- Evite usar `any`
- Use interfaces para objetos complexos

```typescript
// ✅ Bom
interface User {
  id: string
  name: string
  email: string
}

// ❌ Ruim
const user: any = { ... }
```

### React

- Use componentes funcionais
- Use hooks para gerenciamento de estado
- Extraia lógica complexa em custom hooks

```typescript
// ✅ Bom
const MyComponent: React.FC = () => {
  const [state, setState] = useState<string>('')
  
  return <div>{state}</div>
}

// ❌ Ruim
class MyComponent extends React.Component { ... }
```

### Estilização

- Use Tailwind CSS
- Mantenha classes organizadas
- Use @apply para estilos repetidos

```tsx
// ✅ Bom
<button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
  Click me
</button>
```

### Nomenclatura

- **Componentes**: PascalCase (`MyComponent.tsx`)
- **Funções**: camelCase (`myFunction`)
- **Constantes**: UPPER_SNAKE_CASE (`API_URL`)
- **Arquivos**: kebab-case para utilitários (`my-helper.ts`)

## Processo de Pull Request

### Checklist antes de submeter

- [ ] O código segue os padrões do projeto
- [ ] Comentários foram adicionados em código complexo
- [ ] A documentação foi atualizada se necessário
- [ ] Sem warnings no console
- [ ] O código foi testado localmente
- [ ] O linter passa sem erros (`npm run lint`)
- [ ] O build está funcionando (`npm run build`)

### Convenção de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: formatação de código
refactor: refatoração
test: adiciona testes
chore: tarefas de build/config
```

### Exemplos de bons commits

```bash
feat: add wallet connection with MetaMask
fix: resolve navigation issue on mobile
docs: update installation instructions
style: format code with prettier
refactor: simplify authentication logic
```

### Descrição do Pull Request

Seu PR deve incluir:

1. **Descrição**: O que foi alterado e por quê
2. **Tipo de mudança**: Feature, fix, docs, etc.
3. **Como testar**: Passos para validar as mudanças
4. **Screenshots**: Se aplicável
5. **Issues relacionadas**: Link para issues

### Revisão de Código

- Seja respeitoso e construtivo
- Explique seus comentários
- Sugira melhorias, não apenas critique
- Aprove se está satisfeito com as mudanças

## 🙏 Agradecimentos

Obrigado por contribuir com o Block And Play! Cada contribuição, grande ou pequena, é valiosa para o crescimento do projeto.

## 📞 Precisa de Ajuda?

- Discord: [Block And Play Community](#)
- Email: dev@blockandplay.io
- GitHub Issues: Para questões técnicas

---

Feito com ❤️ pela comunidade Block And Play
