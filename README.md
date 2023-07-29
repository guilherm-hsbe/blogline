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

<br>

<!-- ─── 2 - TECNOLOGIA E DESENVOLVIMENTO --> 
## Tecnologia e Desenvolvimento

<!-- ─── ARQUITETURA ────────────────────────────── -->
### :construction_worker: Arquitetura do Projeto
O projeto será desenvolvido utlizando a arquitetura Modelo-Visão-Controlador (MVC). Este modelo é um padrão de design que separa um aplicativo em três componentes principais:

- **Modelo:** Responsável por gerenciar os dados e a lógica de negócios.

- **Visão:** Responsável pela apresentação dos dados para o usuário final.
- **Controlador:** Responsável por intermediar as requisições, processar dados e coordenar a interação entre Modelo e Visão.

Essa separação proporciona modularidade, reutilização de código, escalabilidade e facilita a colaboração em projetos de desenvolvimento de software.

<br>

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

#### Figma [visualizar prototipagem :arrow_upper_right:](https://www.figma.com/file/ij6Q5zmvZdfiXuBa7yATTt/Blogline?type=design&node-id=0%3A1&mode=design&t=dSTYVoIy8RNE0tez-1)
Figma é uma ferramenta de design de interface do usuário (UI) e prototipagem colaborativa baseada em nuvem. É amplamente usado por designers e desenvolvedores para criar wireframes, protótipos interativos e designs de interfaces. Através do Figma, a equipe pode colaborar em tempo real, facilitando o processo de design e garantindo que todos os membros estejam alinhados em relação ao visual e layout do projeto.

#### MySql e PHPMyAdmin
O MySQL é um sistema de gerenciamento de banco de dados relacional amplamente utilizado e de código aberto. Ele oferece suporte para armazenamento, manipulação e recuperação eficiente de dados. O PHPMyAdmin é uma interface gráfica baseada na web que facilita o gerenciamento do banco de dados MySQL, permitindo aos desenvolvedores executar consultas SQL, criar e modificar tabelas, gerenciar usuários, entre outras tarefas administrativas.

<br>

<!-- ─── TEMPO ────────────────────────────── -->
### :calendar: Linha do Tempo de Desenvolvimento
Nesta seção, é apresentada uma breve cronologia das principais etapas de desenvolvimento do projeto de plataforma. A seguir, são destacados os principais marcos e eventos que contribuíram para o desenvolvimento do projeto.

#### [Julho de 2023] - Planejamento e Definição de Objetivos
Nesta fase inicial, a estrutura do arquivo **README** do projeto é definida, onde é configurado todo o corpo e apresentação da plataforma. Também são definidas as estruturas e configurações dos arquivos **LICENSE** e **SECURITY**, descrevendo respectivamente as informações de licenciamento e política de segurança.

#### [Julho de 2023] - Definição do Modelo de Dados
Nesta etapa, é definida toda a configuração do modelo de dados do projeto, incluindo: definição de variáveis, tabelas e relações. Esta etapa será desenvolvida através do software MySQL, e toda a descrição do modelo de dados será definida na seção de **Modelo de Dados**.

#### [Não iniciado] - Prototipação e Design da Interface
Prototipagem completa de todas as telas do sistema. Esta etapa será executada através do software **Figma**. Mais informações a respeito da prototipagem podem ser encontradas no tópico **Figma** em **Softwares e Tecnologias**

<br>

<!-- ─── 3 - CONFIGURAÇÃO E DADOS--> 
## Configuração e Dados

<!-- ─── INSTALAÇÃO ────────────────────────────── -->
### :card_file_box: Instalação e Configuraçãos

<br>

<!-- ─── MODELO ────────────────────────────── -->
### :jigsaw: Modelo de Dados [(visualizar modelagem)](https://dbdiagram.io/d/64c2f19902bd1c4a5ed36005)
Nesta seção, é apresentada a estrutura da base de dados do projeto, que foi projetada para suportar o funcionamento do Blogline.
Abaixo está a descrição das principais tabelas e seus campos:

#### Tabela 'usuarios'
Esta tabela armazena informações sobre os usuários do blog, sejam eles administradores ou bloggers. Cada usuário possui um ID único, nome de login, senha criptografada e papel que indica seu nível de acesso (por exemplo, 1 para administrador, 2 para blogger). Além disso, são armazenados dados complementares, como nome completo, apelido, foto de perfil, biografia, data de nascimento, e informações de contato. O campo created_at registra a data e hora de criação do usuário.

#### Tabela 'categorias'
A tabela de categorias contém informações sobre as diferentes categorias de postagens disponíveis no blog. Cada categoria é identificada por um ID único e possui um título descritivo, uma breve descrição e uma URL para uma imagem associada. O campo created_at registra a data e hora de criação da categoria.

#### Tabela 'postagens'
Nesta tabela, são armazenadas as postagens ordinárias do blog. Cada postagem possui um ID único, um título, um título resumido para exibição em listas, o conteúdo completo em formato de texto, uma URL de imagem relacionada, um indicador de publicação (publicado), e o número de visualizações. O campo created_at registra a data e hora de criação da postagem. Além disso, há uma chave estrangeira usuario_id que relaciona cada postagem ao usuário que a criou.

#### Tabela 'postagens_categorias'
Essa tabela é usada para relacionar postagens com categorias em uma relação muitos para muitos. Cada entrada na tabela possui um ID único, bem como duas chaves estrangeiras: postagem_id, que faz referência ao ID da postagem, e categoria_id, que faz referência ao ID da categoria associada à postagem. O campo created_at registra a data e hora em que a relação foi criada.

#### Tabela 'comentarios'
A tabela de comentários armazena os comentários feitos pelos usuários em cada postagem. Cada comentário possui um ID único, e duas chaves estrangeiras: postagem_id, que faz referência ao ID da postagem à qual o comentário está associado, e usuario_id, que faz referência ao ID do usuário que fez o comentário. O campo created_at registra a data e hora de criação do comentário.

<br>

<!-- ─── 4 - COLABORAÇÃO E LICENÇA --> 
## Colaboração e Licença

<!-- ─── EQUIPE ────────────────────────────── -->
### :computer: Equipe e Colaborações
Até a última atualização deste README, **26 de julho de 2023**, eu [@guilherm-hsbe](github.com/guilherm-hsbe), sou o único desenvolvedor responsável por todas as etapas de criação e implementação da plataforma. No entanto, isso não significa que o projeto não esteja aberto para colaborações e contribuições de outros usuários interessados.

<!-- ─── LICENÇA ────────────────────────────── -->
### :balance_scale: Licença
Este projeto é [licenciado](github.com/guilherm-hsbe/Blogline/blob/main/LICENSE) sob a Licença MIT.

A Licença MIT é uma licença de código aberto permissiva que oferece amplas liberdades aos usuários para usar, modificar, distribuir e até mesmo incorporar este software em projetos proprietários. Ela permite que você utilize este projeto livremente, sem restrições significativas, desde que a nota de direitos autorais e a declaração da licença sejam mantidas em todas as cópias.

Você é incentivado a colaborar e contribuir para o desenvolvimento deste projeto. Se você deseja adicionar novas funcionalidades, corrigir problemas ou melhorar o código, fique à vontade para enviar suas contribuições através de "pull requests". Lembre-se de seguir as diretrizes de contribuição estabelecidas neste repositório.

Embora esta licença permita o uso e a distribuição do projeto, não é permitido fazer cópias diretas da interface ou do código sem o devido consentimento. Se você estiver interessado em utilizar partes específicas deste projeto, por favor, entre em contato para obter permissão antes de proceder.

### :shield: Segurança
Relate quaisquer vulnerabilidades encontradas e proteja sua privacidade, pois no projeto são utilizados dados fictícios para visualização. Colaborações são bem-vindas, desde que sigam as [práticas de segurança ](github.com/guilherm-hsbe/Blogline/blob/main/SECURITY).

<!-- ─── 5 - FEEDBACK E AGRADECIMENTOS --> 
## Feedback e Contato

<!-- ─── FEEDBACK ────────────────────────────── -->
### :clap: Feedback
Se você visualizou a plataforma ou tem algum feedback, sugestão ou ideia para compartilhar, basta entrar em contato! Seu feedback é importante, pois ajuda a aprimorar os recursos oferecidos.

Caso tenha encontrado algum problema técnico ou identificado bugs durante a utilização, por favor, relate através da seção de **issues** no repositório do GitHub.

<!-- ─── CONTATO ────────────────────────────── -->
### :mailbox: Contato
Para entrar em contato diretamente, você pode utilizar um dos seguintes canais:

- E-mail :email: [guilherm3hsb@gmail.com](mailto:guilherm3hsb@gmail.com)
- WhatsApp :calling: [+5518988058371](https://wa.me/5518988058371)
