# teste de API com Node.js

## Techs 
> Node.js (com o pacote pg-promise )

> Express.js

> PostgreSQL

## Sobre o projeto

Fiz esse projeto como teste afim de validar as funcionalidades e a primeira impressão sobre a stack JavaScript para realizar posteriormente um projeto de faculdade, ainda precisando aprofundar mais na tecnologia, pois o projeto foi feito seguindo um tutorial muito interessante que encontrei, bem explicativo e ajudou bastante. Agora que está testado, partimos para a parte interessante (rs).

## Dicas

Para instalar as dependencias do projeto <br>
Vá na pasta raiz do projeto e na linha de comando, digite a seguinte linha.
~~~ js
npm install
~~~

Para iniciar o servidor do Express.js, execute o próximo comando
~~~ js
node server.js
~~~

O servidor iniciará por default na porta http 3000

## Rotas da API

### Verbos HTTP e rotas

Rota responsável por listar todos os produtos registrados
~~~ http
(GET)
localhost:3000/api/products
~~~


Rota responsável por listar um produto através de seu id
~~~ http
(GET)
localhost:3000/api/products/:id

//localhost:3000/api/products/1
~~~

Rota responsável por adicionar um produto

Obs: Rota deverá ter um Body no formato de JSON com as seguintes chaves (productName, quantity, price)
~~~ http
(POST)
localhost:3000/api/products
~~~


Rota responsável por alterar um produto cadastro

Obs: Rota deverá ter um Body no formato de JSON com as seguintes chaves (productName, quantity, price, id)
~~~ http
(PUT)
localhost:3000/api/products/:id
~~~


Rota responsável por excluir um produto cadastrado.
~~~ http
(DELETE)
localhost:3000/api/products/:id
~~~



### Status do projeto 

✔️ Finalizado! ✔️