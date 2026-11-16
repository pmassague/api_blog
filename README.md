# API Blog

API REST desarrollada con Node.js, Express y MySQL que nos permita gestionar todas las publicaciones (posts) y autores de un proyecto de tipo Blog. 

## Recuperar todos los posts (incluyendo los datos del autor de cada post)

Method: GET  
Url: /api/posts  
Headers: XXXX  
Body: XXXX  

Response:   
- Un array con todos los posts y los datos del autor de cada post  

## Recuperar un post a través de su ID (incluyendo los datos del autor del post)

Method: GET  
Url: /api/posts/IDPOST  
Headers: XXXX  
Body: XXXX  

Response:
- Objeto con los datos del post y los datos del autor

## Crear un nuevo post

Method: POST  
Url: /api/posts  
Headers: XXXX  
Body: titulo, descripcion, categoria, autor_id  

Response:
- Objeto con los datos del nuevo post

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

## Recuperar todos los posts de un autor concreto (incluyendo los datos del autor)

Method: GET  
Url: /api/autores/IDAUTOR/posts  
Headers: XXXX  
Body: XXXX  

Response: 
- Un array con todos los posts para un autor concreto incluyendo los datos del autor

