# Browser Extensions Manager UI

![Preview do projeto](./preview.jpg)

## Sobre o Projeto

Este projeto é uma interface de gerenciamento de extensões de navegador, desenvolvida como desafio prático de front-end. O objetivo é simular um painel onde o usuário pode visualizar, ativar/desativar, filtrar e remover extensões, com layout responsivo e experiência de usuário moderna.

## Funcionalidades

- **Visualização de extensões:** Lista todas as extensões disponíveis, com nome, descrição e ícone.
- **Alternar estado:** Permite ativar ou desativar cada extensão individualmente através de um switch.
- **Filtragem:** Filtre extensões por status (Todas, Ativas, Inativas) usando os botões no topo.
- **Remoção:** Remova extensões da lista clicando no botão "Remove".
- **Tema claro/escuro:** Alterne entre os temas usando o botão no header.
- **Responsividade:** Layout adaptado para desktop e mobile, seguindo o design proposto.
- **Acessibilidade:** Estados de hover e foco para todos os elementos interativos.

## Tecnologias Utilizadas

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6+)**
- **Fetch API** para carregar dados do arquivo `data.json`

## Como funciona

- Os dados das extensões são carregados dinamicamente do arquivo `data.json`.
- Toda a renderização dos cards é feita via JavaScript, permitindo atualização instantânea ao filtrar, remover ou alternar o estado das extensões.
- O tema pode ser alternado a qualquer momento, e o layout se adapta automaticamente ao tamanho da tela.

## Como rodar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/cauanlsreis/gerenciador_extensoes.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd browser-extensions-manager-ui
   ```
3. Abra o arquivo `index.html` no seu navegador.

> **Atenção:** Para que o carregamento do `data.json` funcione corretamente, utilize um servidor local (como [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code) ou faça deploy em um serviço como [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/).


## Estrutura de Pastas

```
/
├── assets/           # Imagens e ícones do projeto
├── design/           # Arquivos de design (JPGs de referência)
├── data.json         # Dados das extensões
├── index.html        # Página principal
├── style.css         # Estilos principais
├── main.js           # Lógica JS do projeto
└── README.md         # Este arquivo
```
