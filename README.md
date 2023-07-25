# Blogline :leaves: Um Espaço para Explorar Arte e Criatividade

<!-- 
Atalhos para tópicos:

Seção 1: Introdução
  - Título do Blog
  - Visão Geral do Projeto: Descrição detalhada do blog, seu propósito, temas abordados e público-alvo. Destaque os principais objetivos e o que torna o blog único e interessante para os leitores.
  - Funcionalidades Principais: Liste e descreva as principais funcionalidades que os usuários encontrarão no blog. Detalhe como cada funcionalidade irá melhorar a experiência do usuário e a interação com o conteúdo.

Seção 2: Tecnologia e Desenvolvimento
  - Arquitetura do Projeto: Explique a arquitetura adotada para o desenvolvimento do blog, destacando o padrão MVC (Modelo-Visão-Controlador). Discuta como a arquitetura contribui para a organização e escalabilidade do projeto.
  - Softwares e Tecnologias: Liste e detalhe as principais tecnologias e softwares utilizados no desenvolvimento do blog. Descreva o papel de cada tecnologia no projeto e como elas se complementam para criar uma plataforma completa.
  - Linha do Tempo de Desenvolvimento: Apresente uma linha do tempo resumida das principais etapas do desenvolvimento do blog. Destaque os marcos importantes, eventos significativos e momentos de lançamento.

Seção 3: Configuração e Dados
  - Instalação e Configuração: Forneça instruções detalhadas para a instalação e configuração do blog em um ambiente de desenvolvimento local. Inclua requisitos do sistema, dependências e etapas para execução do projeto.
  - Modelo de Dados: Descreva a estrutura do banco de dados do blog, incluindo as tabelas e suas relações. Destaque as principais entidades do banco de dados e seus atributos.

Seção 4: Colaboração e Licença
  - Equipe e Contribuições: Apresente os membros da equipe que participaram do desenvolvimento do blog. Inclua informações sobre suas contribuições e papéis no projeto.
  - Licença e Direitos Autorais: Informe a licença sob a qual o projeto é disponibilizado, bem como os direitos e responsabilidades dos usuários ao utilizá-lo. Inclua informações sobre os direitos autorais do conteúdo presente no blog.

Seção 5: Feedback e Agradecimentos
  - Feedback e Contato: Forneça informações de contato para que os leitores possam enviar feedback, sugestões ou dúvidas relacionadas ao blog. Inclua links para redes sociais ou formulários de contato, se disponíveis.
  - Agradecimentos e Reconhecimentos: Agradeça a todos que contribuíram para o desenvolvimento do blog, incluindo membros da equipe, colaboradores e fontes de inspiração. Reconheça o apoio de parceiros, comunidades e indivíduos que apoiaram o projeto de alguma forma. 
-->

<!-- ─── 1 - INTRODUÇÃO --> 
## Introdução

<!-- ─── VISÃO GERAL ────────────────────────────── -->
### :dart: Visão Geral do Projeto
O projeto se trata do desenvolvimento de uma plataforma de blog colaborativo focado em arte e criatividade. A plataforma possibilitará o compartilhamento de trabalhos artísticos, discussões técnicas de pintura, fotografia, design, escrita criativa, música, entre outros temas criativos.

<!-- ─── FUNCIONALIDADES ────────────────────────────── -->
### :wrench: Funcionalidades Principais
Além do compartilhamento de trabalhos artísticos e discussões técnicas, alguns pontos-chave que irão destacar o projeto são:

- **Categorias e Tags:** Os usuários poderão categorizar suas postagens em diversas áreas, como pintura, fotografia, escrita, música, design, entre outras. Além disso, eles poderão adicionar tags relevantes para tornar a pesquisa e navegação mais eficientes.

- **Perfil Personalizado:** Cada membro terá um perfil personalizado onde poderá adicionar uma breve biografia, suas redes sociais e links para portfólios externos, permitindo uma conexão mais próxima entre os leitores e os artistas.
- **Destaque para Conteúdo Destacado:** Haverá uma seção especial dedicada a destacar as postagens mais populares, as mais comentadas e as mais inspiradoras, dando visibilidade extra aos participantes talentosos.
- **Design Limpo e Responsivo:** A interface do blog será projetada para ser limpa, intuitiva e responsiva, proporcionando uma experiência agradável em diferentes dispositivos e tamanhos de tela.
- **Desenvolvimento Aberto à Contribuições:** O projeto será desenvolvido em um ambiente de código aberto, encorajando outros desenvolvedores a contribuírem com melhorias, correções de bugs e novas funcionalidades.

<!-- ─── 2 - TECNOLOGIA E DESENVOLVIMENTO --> 
## Tecnologia e Desenvolvimento

<!-- ─── ARQUITETURA ────────────────────────────── -->
### :construction_worker: Arquitetura do Projeto
O projeto será desenvolvido utlizando a arquitetura Modelo-Visão-Controlador (MVC). Este modelo é um padrão de design que separa um aplicativo em três componentes principais:

- **Modelo:** Responsável por gerenciar os dados e a lógica de negócios.

- **Visão:** Responsável pela apresentação dos dados para o usuário final.
- **Controlador:** Responsável por intermediar as requisições, processar dados e coordenar a interação entre Modelo e Visão.

Essa separação proporciona modularidade, reutilização de código, escalabilidade e facilita a colaboração em projetos de desenvolvimento de software.

<!-- ─── SOFTWARES ────────────────────────────── -->
### :desktop_computer: Softwares e Tecnologias
#### Laravel Framework
Laravel é um framework PHP de código aberto muito popular para desenvolvimento web. Ele segue o padrão de arquitetura MVC, permitindo a organização estruturada do código e tornando o desenvolvimento mais eficiente. Com uma ampla gama de funcionalidades, como gerenciamento de rotas, autenticação, validação de formulários e interação com bancos de dados, o Laravel facilita a criação de aplicativos web robustos e seguros. Através do uso de bibliotecas e recursos integrados, o Laravel permite o desenvolvimento rápido e a implementação de várias funcionalidades-chave, tornando-o uma escolha popular para projetos web.

#### HTML, CSS, JavaScript, PHP, SQL
Essas são as linguagens essenciais para o desenvolvimento do projeto:

- **HTML (HyperText Markup Language)** é usado para criar a estrutura e o conteúdo das páginas web.
- **CSS (Cascading Style Sheets)** é usado para estilizar a aparência das páginas web, controlando layout, cores, fontes e outros elementos visuais.
- **JavaScript** é uma linguagem de programação de alto nível que permite interatividade e dinamismo em páginas web.
- **PHP (Hypertext Preprocessor)** é uma linguagem de script de servidor usada para criar a lógica de negócios e interagir com o banco de dados.
- **SQL (Structured Query Language)** é a linguagem usada para consultar e gerenciar o banco de dados.

#### Visual Studio Code
O Visual Studio Code é um editor de código-fonte gratuito e altamente popular, desenvolvido pela Microsoft. Ele oferece suporte para várias linguagens de programação e possui uma ampla variedade de extensões, facilitando o desenvolvimento e a depuração de aplicativos web. O VS Code é conhecido por sua interface de usuário amigável, integração com controle de versão e várias ferramentas úteis para os desenvolvedores.

#### Figma
Figma é uma ferramenta de design de interface do usuário (UI) e prototipagem colaborativa baseada em nuvem. É amplamente usado por designers e desenvolvedores para criar wireframes, protótipos interativos e designs de interfaces. Através do Figma, a equipe pode colaborar em tempo real, facilitando o processo de design e garantindo que todos os membros estejam alinhados em relação ao visual e layout do projeto.

#### MySql e PHPMyAdmin
O MySQL é um sistema de gerenciamento de banco de dados relacional amplamente utilizado e de código aberto. Ele oferece suporte para armazenamento, manipulação e recuperação eficiente de dados. O PHPMyAdmin é uma interface gráfica baseada na web que facilita o gerenciamento do banco de dados MySQL, permitindo aos desenvolvedores executar consultas SQL, criar e modificar tabelas, gerenciar usuários, entre outras tarefas administrativas.

<!-- ─── TEMPO ────────────────────────────── -->
### :calendar: Linha do Tempo de Desenvolvimento

<!-- ─── 3 - CONFIGURAÇÃO E DADOS--> 
## Configuração e Dados

<!-- ─── INSTALAÇÃO ────────────────────────────── -->
### :card_file_box: Instalação e Configuração

<!-- ─── MODELO ────────────────────────────── -->
### :jigsaw: Modelo de Dados

<!-- ─── 4 - COLABORAÇÃO E LICENÇA --> 
## Colaboração e Licença

<!-- ─── EQUIPE ────────────────────────────── -->
### :technologist: Equipe e Colaborações

<!-- ─── LICENÇA ────────────────────────────── -->
### :balance_scale: Licença e Direitos Autorais

<!-- ─── 5 - FEEDBACK E AGRADECIMENTOS --> 
## Feedback e Agradecimentos

<!-- ─── FEEDBACK ────────────────────────────── -->
### :mailbox: Feedback e Contato

<!-- ─── FEEDBACK ────────────────────────────── -->
### :clap: Agradecimentos
