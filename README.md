# API Blog

## Recuperar todos los autores

Method: GET
Url: /api/autores
Headers: XXXX
Body: XXXX

Response: 
- Un array con todos los autores

## Recuperar un autor a través de su ID

Method: GET
Url: /api/autores/IDAUTOR
Headers: XXXX
Body: XXXX

Response:
- Objeto con los datos del autor

## Crear un nuevo autor

Method: POST
Url: /api/autores
Headers: XXXX
Body: nombre, email, imagen

Response:
- Objeto con los datos del nuevo autor


## Recuperar todos los posts (incluyendo los datos del autor de cada post)

Method: GET
Url: /api/posts
Headers: XXXX
Body: XXXX

Response: 
- Un array con todos los posts

## Recuperar un post a través de su ID (incluyendo los datos del autor de cada post)

Method: GET
Url: /api/posts/IDPOST
Headers: XXXX
Body: XXXX

Response:
- Objeto con los datos del post

## Crear un nuevo post

Method: POST
Url: /api/posts
Headers: XXXX
Body: nombre, email, imagen

Response:
- Objeto con los datos del nuevo autor

## Recuperar todos los posts de un autor concreto (incluyendo los datos del autor)

Method: GET
Url: /api/posts/autor/:idAutor
Headers: XXXX
Body: XXXX

Response: 
- Un array con todos los posts para un autor concreto

