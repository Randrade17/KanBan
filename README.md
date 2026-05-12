My Flow Kanban 🚀

Um quadro Kanban moderno e responsivo desenvolvido com React, utilizando Drag and Drop para organização de tarefas de forma intuitiva e dinâmica.

📌 Sobre o Projeto

O My Flow Kanban é uma aplicação simples e funcional para gerenciamento de tarefas baseada na metodologia Kanban.

Com ele, é possível:

✅ Criar tarefas
🔄 Arrastar tarefas entre colunas
📌 Organizar atividades por status
💾 Salvar automaticamente as tarefas no navegador com localStorage
🛠️ Tecnologias Utilizadas
⚛️ React
🎯 @dnd-kit/core
📦 @dnd-kit/sortable
🎨 Tailwind CSS
🖼️ Lucide React
📂 Estrutura do Projeto
src/
│
├── components/
│   ├── Kanban.js
│   ├── Column.js
│   └── TaskCard.js
│
├── App.js
└── main.js
⚙️ Instalação

Clone o repositório:

git clone https://github.com/seu-usuario/my-flow-kanban.git

Acesse a pasta do projeto:

cd my-flow-kanban

Instale as dependências:

npm install

Ou utilize o comando presente no arquivo requirements.sh:

npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities lucide-react
▶️ Executando o Projeto

Inicie o servidor de desenvolvimento:

npm run dev

ou

npm start
🧠 Funcionalidades
📋 Gerenciamento de Tarefas
Adicionar novas tarefas
Separação por colunas:
A Fazer
Em Progresso
Concluído
🖱️ Drag and Drop

Utilizando a biblioteca @dnd-kit, o usuário pode mover tarefas facilmente entre colunas.

💾 Persistência de Dados

As tarefas permanecem salvas mesmo após atualizar a página graças ao localStorage.

📸 Preview
┌──────────────┬─────────────────┬──────────────┐
│  A Fazer     │ Em Progresso   │ Concluído   │
│              │                 │              │
│  [Task 1]    │  [Task 2]       │  [Task 3]   │
│              │                 │              │
└──────────────┴─────────────────┴──────────────┘
📌 Melhorias Futuras
✏️ Editar tarefas
🗑️ Remover tarefas
👤 Sistema de usuários
☁️ Banco de dados online
📱 Melhor responsividade mobile
🌙 Dark Mode
🤝 Contribuição

Contribuições são bem-vindas!

Faça um fork do projeto e envie um Pull Request 🚀

📄 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

Desenvolvido por Rafael Figueiredo 💻

📫 Contato LinkedIn: https://www.linkedin.com/in/rafael-figueiredo-de-andrade/ GitHub: https://github.com/Randrade17 

Se você gostou do projeto:

⭐ Deixe uma estrela no repositório 🍴 Faça um fork 🛠️ Contribua com melhorias
