# Challenge Rick and Morty
_Challenge con React y GraphQL en el cual se tenia que hacer request a una API de Rick and Morty
Se le dio prioridad al funcionamiento antes que a los estilos_

## Para ejecutar
Clonar el repo y dentro de este ejecutar

```
npm install
npm start
```
- deberia estar corriendo en el puerto 3000


## Requisitos
_Esta debia mostrar lo siguientes puntos en pantalla_

### 1
_Se requiere una pantalla donde se muestren todos los personajes de la serie; De estos personajes se quiere saber los siguientes campos: name, status, specie, location, episode,imagen del personaje episodio en el que sale. De esta pantalla se desearia tener lo siguiente:page=${activePage}_
 -  _Se debe poder filtrar o buscar un personaje por su name._
 -  _Se debe poder ver la imagen del personóaje._
 -  _Al presionar la location seria ideal llevar al usuario a una pantalla con los detalles de la location._
 -  _Al presionar el episode seria ideal llevar al usuario a una pantalla con los detalles del episode._

### 2
_Se requiere una pantalla donde se muestren los detalles de un episodio basado en un parametro en la url :id . De este episodio se quiere conocer los siguientes campos: name, air_date y characters . De esta pantalla se desearia tener lo siguiente:_
 -  _Se debe poder ver el name, status e imagen de cada personaje._

### 3 
_Se requiere una pantalla donde se muestren los detalles de una location basado en un parametro en la url :id . De esta location se quiere conocer los siguientes campos: name, type, dimension y residents . De esta pantalla se desearia tener lo siguiente:_
- Se debe poder ver el name, status e imagen de cada residents.

### 4
Se debe poder desplegar la aplicación en un servidor (netifly, firebase, now.sh, etc)

### 5
Se debe poder correr en otra computadora al momento de clonar la aplicación, es decir debe ser dockerizable (preferentemente usar docker y docker-compose).
Utilizar GraphQL como lenguaje de consultas.

En la carpeta donde se clono el repo ejecutar los siguientes comandos
```
docker build -t challenger:dev .
```
Para crear la imagen y luego
```
docker run --publish 5000:3000 challenger:dev
```
Para ejecutarla
- deberia poder verse en http://localhost:5000/
