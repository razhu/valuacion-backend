# PROYECTO BACKEND

## Para el correcto despliegue se debe tener instalado:
- Postgres
- NodeJs (v8.9.3)

## Instalar dependencias globales para node

```sh
$ npm install --global sequelize sequelize-cli
$ npm install --global pg pg-hstore
$ npm install --global nodemon
```
## Instalar la aplicación

1. Crear la base de datos ***test_db***
2. Modificar el archivo ***src/config/app.json*** y cambiar los parametros de la base de datos (configuración para los seeders)
3. Modificar el archivo ***src/config/config.json*** y cambiar los parametros de la base de datos (conexión de la app)
4. Ingresar al directorio de la aplicación
5. Instalar dependencias
```sh
$ npm install
```
6. Iniciar la base de datos
```sh
$ npm run setup
```
7. Iniciar la aplicación (la app corre en el puerto 4000 por defecto)
```sh
$ npm start
```