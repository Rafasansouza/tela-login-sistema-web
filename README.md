# Tela de Login - Sistema de Gerenciamento de Salão de Beleza

## Descrição
Tela de login moderna e responsiva desenvolvida para sistema de gerenciamento de salão de beleza. O design combina elegância, funcionalidade e uma experiência de usuário premium.

## Características

### Design
- **Layout dividido**: Seção visual à esquerda com branding e formulário à direita
- **Paleta de cores**: Gradientes em tons rosados/coral com detalhes dourados
- **Tipografia**: Fonte Poppins para modernidade e legibilidade
- **Elementos visuais**: Círculos flutuantes animados e efeitos de profundidade

### Funcionalidades
- ✅ Validação em tempo real dos campos
- ✅ Toggle para mostrar/ocultar senha
- ✅ Opção "Lembrar-me" com localStorage
- ✅ Link "Esqueci minha senha"
- ✅ Botões de login social (Google/Facebook)
- ✅ Feedback visual com notificações
- ✅ Loading spinner durante autenticação
- ✅ Efeitos de hover e micro-interações

### Responsividade
- ✅ Adaptável para desktop, tablet e mobile
- ✅ Layout empilhado em dispositivos móveis
- ✅ Campos e botões otimizados para touch
- ✅ Breakpoints bem definidos

## Tecnologias Utilizadas
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com flexbox e grid
- **JavaScript**: Interatividade e validações
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia Poppins

## Estrutura de Arquivos
```
salon-login/
├── index.html          # Estrutura principal
├── styles.css          # Estilos e responsividade
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentação
```

## Como Usar

### Credenciais de Teste
- **Email**: admin@salon.com
- **Senha**: 123456

### Instalação
1. Faça o download dos arquivos
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. A tela estará pronta para uso

### Personalização
- **Cores**: Edite as variáveis CSS no início do arquivo `styles.css`
- **Logo**: Substitua o ícone e texto no arquivo `index.html`
- **Validações**: Modifique as regras no arquivo `script.js`

## Recursos Implementados

### Validação
- Verificação de formato de email
- Validação de senha (mínimo 6 caracteres)
- Feedback visual imediato
- Mensagens de erro personalizadas

### Segurança
- Campos de senha ocultos por padrão
- Validação client-side
- Preparado para integração com backend

### UX/UI
- Animações suaves
- Estados de hover e focus
- Notificações elegantes
- Design intuitivo

## Compatibilidade
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Dispositivos móveis iOS/Android

## Próximos Passos
Para integração com sistema real:
1. Conectar com API de autenticação
2. Implementar recuperação de senha
3. Adicionar autenticação 2FA
4. Integrar com sistema de gerenciamento