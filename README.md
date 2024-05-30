This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Sobre

Projeto pessoal criado para praticar meus conhecimentos de front-end, visando desenvolver um clone da interface da Netflix. A paleta de cores, bem como o nome e a logo da netflix foram alterados com o intuito de evitar com que o Google reconheça o site como Phising ao realizar seu deploy. Para o desenvolvimento foram utilizadas as seguintes tecnologias:

- Next.js com Typescript
- Styled Components (@emotion/styled) para estilização
- API da Themoviedb para coletar as informações sobre os filmes e séries

Para rodar localmente é necessário colocar a sua chave da API da Themoviedb na variável de ambiente MOVIEDB_API_KEY.
Rodar o comando "yarn" e em seguida "yarn dev".

## Pontos fortes

- Bom resultado em relação a interface
- Sessões de séries e filmes separadas por gênero
- Página de bombando com scroll infinito
- Campo de busca implementado

## Limitações

- Não é possível registrar ações dos usuários (filmes favoritos, adicionar em lista, assistir mais tarde e etc)
- Não foram implementadas funcionalidades ao clicar nos botões e nos filmes
- Não é possível de fato assistir filmes e séries

## Próximos passos para o projeto

- Sistema de criação de conta e login utilizando firebase
- Interação com os filmes/séries (hover e clique - mostrar mais informações)
- Com conta criada, criar diferentes perfis, selecionando a imagem e nome de cada um (salvar os dados no firebase)
- Aparecer menu no hover da seta da navbar
