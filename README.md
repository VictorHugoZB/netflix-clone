This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Sobre

Projeto pessoal criado para praticar meus conhecimentos de front-end. Foi visado o desenvolvimento de um clone da interface da Netflix, e para isso foram utilizadas as seguintes tecnologias:

- Next.js com Typescript
- Styled Components (@emotion/styled) para estilização
- API da Themoviedb para coletar as informações sobre os filmes e séries

Para rodar localmente é necessário colocar a chave da API da Themoviedb como variável de ambiente (ver .env.sample).
Rodar o comando "yarn" e em seguida "yarn dev".

## Pontos fortes

- Bom resultado em relação a interface
- Sessões de séries e filmes separadas por gênero
- Página de bombando com scroll infinito
- Campo de busca implementado

## Limitações

- Não é responsivo
- Não é possível de fato assistir filmes e séries
- Não é possível registrar ações dos usuários (filmes favoritos, adicionar em lista, assistir mais tarde e etc)

## Pretendo adicionar no projeto

- Sistema de criação de conta e login utilizando firebase
- Interação com os filmes/séries (hover e clique - mostrar mais informações)
- Com conta criada, criar diferentes perfis, selecionando a imagem e nome de cada um (salvar os dados no firebase)
- Aparecer menu no hover da seta da navbar
