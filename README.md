# 🎬 Movie Search - Desafio para um processo seletivo

Uma aplicação completa para pesquisa de filmes desenvolvida com React e Node.js que consome dados de uma API externa e permite pesquisar e visualizar detalhes dos filmes.

![Image](https://github.com/IvanM4rtin5/Movie-Search/blob/main/app-movie/public/Captura%20de%20tela%202025-07-24%20185209.png)

## 📋 Funcionalidades

- ✅ **Listagem de filmes** - Exibe todos os filmes disponíveis
- ✅ **Pesquisa avançada** - Busca por título, gênero, diretor ou ano
- ✅ **Detalhes do filme** - Página detalhada com informações completas
- ✅ **Validação de disponibilidade** - Bloqueia navegação para filmes sem detalhes
- ✅ **Interface responsiva** - Funciona em desktop e mobile
- ✅ **Tratamento de erros** - Mensagens claras para diferentes cenários
- ✅ **Loading states** - Feedback visual durante carregamento

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web

### Frontend
- **React 18** - Biblioteca UI com hooks
- **React Router DOM** - Navegação SPA
- **Axios** - Cliente HTTP
- **CSS3** - Estilização responsiva com gradientes e animations

## 📦 Estrutura do Projeto

```
movie-search-app/
├── backend/
│   ├── server.js                 # Servidor principal
│   ├── routes/
│   │   └── movies.js            # Rotas da API de filmes
│   ├── services/
│   │   └── movieService.js      # Lógica de negócio e integração com API
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── MovieCard.js     # Card individual do filme
│   │   │   ├── MovieList.js     # Lista de filmes
│   │   │   └── SearchBar.js     # Barra de pesquisa
│   │   ├── pages/
│   │   │   ├── Home.js          # Página principal
│   │   │   └── MovieDetailPage.js # Página de detalhes
│   │   ├── services/
│   │   │   └── api.js           # Cliente API
│   │   ├── styles/
│   │   │   └── App.css          # Estilos globais
│   │   ├── App.js               # Componente raiz
│   │   └── index.js             # Entry point
│   ├── public/
│   │   └── index.html
│   └── package.json
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn
- Conexão com internet (para API externa)

### Passo 1: Clonar o repositório
```bash
git clone [URL_DO_SEU_REPOSITORIO]
cd movie-search-app
```

### Passo 2: Configurar o Backend
```bash
cd backend
npm init -y
npm install express cors axios nodemon
```

Crie o arquivo `server.js` com o código fornecido.

### Passo 3: Configurar o Frontend
```bash
cd ../frontend
npx create-react-app .
npm install react-router-dom axios
```

Substitua os arquivos gerados pelos códigos fornecidos.

### Passo 4: Executar o Backend
```bash
cd backend
npm run dev
```
O servidor estará rodando em `http://localhost:5000`

### Passo 5: Executar o Frontend
```bash
cd frontend
npm start
```
A aplicação estará disponível em `http://localhost:3000`

## 🔌 API Endpoints

### Backend Local

- `GET /api/movies` - Lista todos os filmes
- `GET /api/movies/search?q={termo}` - Pesquisa filmes
- `GET /api/movies/:id` - Detalhes de um filme específico

### API Externa
- URL: `https://arquivos.workdoc.com.br/estagio/movieData.js`
- Contém dados dos filmes em formato JavaScript

## 📱 Funcionalidades Detalhadas

### 1. Página Principal (Home)
- **Listagem completa** de filmes com informações básicas
- **Barra de pesquisa** com placeholder explicativo
- **Cards responsivos** com poster, título, ano, gênero e diretor
- **Indicação visual** para filmes sem detalhes disponíveis
- **Contador de resultados** exibido dinamicamente

### 2. Pesquisa Inteligente
- Busca em **múltiplos campos**: título, gênero, diretor, ano
- **Debounce** para otimizar requisições
- **Botão limpar** para resetar pesquisa
- **Estados de loading** durante pesquisa
- **Mensagens informativas** para resultados

### 3. Detalhes do Filme
- **Validação de disponibilidade** antes da navegação
- **Layout detalhado** com poster grande e informações completas
- **Navegação intuitiva** com botões voltar e home
- **Tratamento de erros** para filmes não encontrados
- **Design responsivo** para diferentes telas

### 4. Tratamento de Dados
- **Cache inteligente** dos dados da API (5 minutos)
- **Validação** de campos obrigatórios
- **Logs detalhados** para debugging

## 🎨 Design e UX

### Interface
- **Design moderno** com gradientes e glassmorphism
- **Paleta de cores** profissional (vermelho/preto/roxo)
- **Micro-interações** com hover effects e transições
- **Icons intuitivos** para diferentes categorias
- **Typography** legível e hierarquizada

### Responsividade
- **Mobile-first** approach
- **Breakpoints** otimizados para diferentes dispositivos
- **Grid flexível** que se adapta ao conteúdo
- **Touch-friendly** buttons e elementos

### Estados da Interface
- **Loading spinners** durante carregamento
- **Empty states** para resultados vazios
- **Error boundaries** com mensagens claras
- **Success feedback** para ações completadas

## ⚡ Otimizações

### Performance
- **Cache de dados** no backend (5 minutos)
- **Lazy loading** de componentes pesados
- **Otimização de imagens** com fallback
- **Debounce** na pesquisa para reduzir requisições

### SEO e Acessibilidade
- **Alt texts** apropriados para imagens
- **Semantic HTML** em todos os componentes
- **Contraste adequado** para texto e fundos
- **Keyboard navigation** funcional

### Tratamento de Erros
- **Interceptors** no Axios para padronizar erros
- **Try-catch** em todas as operações assíncronas
- **Fallback UI** para componentes que falharam
- **Logging detalhado** para debug

## 🧪 Testes Recomendados

### Cenários de Teste
1. **Carregamento inicial** - Verificar se lista todos os filmes
2. **Pesquisa básica** - Buscar por título conhecido
3. **Pesquisa avançada** - Buscar por gênero, diretor, ano
4. **Navegação** - Clicar em filme com detalhes disponíveis
5. **Bloqueio** - Tentar acessar filme sem detalhes
6. **Responsividade** - Testar em diferentes tamanhos de tela

## 🔧 Configurações Adicionais

### Scripts Úteis
```json
{
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js",
    "build": "npm run build --prefix ../frontend",
    "test": "npm test --prefix ../frontend"
  }
}
```

## 📋 Checklist de Entrega

- ✅ **Código funcional** - Aplicação roda sem erros
- ✅ **Integração com API** - Consome dados externos corretamente
- ✅ **Pesquisa implementada** - Busca funciona em múltiplos campos
- ✅ **Navegação entre telas** - Router configurado
- ✅ **Validação de detalhes** - Bloqueia acesso quando necessário
- ✅ **Design responsivo** - Funciona em desktop e mobile
- ✅ **Tratamento de erros** - Mensagens claras para o usuário
- ✅ **Código documentado** - README completo
- ✅ **Estrutura organizada** - Separação clara de responsabilidades

## 🎥 Para o Vídeo de Demonstração

### Roteiro Sugerido
1. **Apresentação inicial** (30s) - Explicar o projeto e tecnologias
2. **Tour pela interface** (1min) - Mostrar layout responsivo
3. **Funcionalidade de pesquisa** (1min) - Demonstrar diferentes tipos de busca
4. **Navegação de detalhes** (1min) - Mostrar página de detalhes
5. **Tratamento de erros** (30s) - Demonstrar validações
6. **Código relevante** (1min) - Destacar integração com API
7. **Conclusão** (30s) - Resumir funcionalidades entregues

### Pontos Importantes a Destacar
- **Integração com API externa** e manipulação de dados JSON
- **Estrutura do código** bem organizada e comentada
- **Tratamento de casos especiais** (filmes sem detalhes)
- **Interface intuitiva** e responsiva
- **Validações e feedback** para o usuário

---

**Desenvolvido por:** [Ivan-Martins]  
**Para:** Desafio Work Doc  
**Data:** [24/07/2025]  
**Tempo de desenvolvimento:** 8 horas

### 📞 Contato
Em caso de dúvidas sobre o projeto:
- Email: [ivanmarti.alves@gmail.com]
- LinkedIn: [https://www.linkedin.com/in/ivan-martins-alves/]
- GitHub: [https://github.com/IvanM4rtin5]
