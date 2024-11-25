# EShop

Ecomerce para Prueba técnica Frontend React

- [Demo - Preview](https://cardcreditform.web.app/)

## Tecnologías Utilizadas

- **Next.js 15**: Framework de React para desarrollo web.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Redux**: Manejo de estado para el carrito de compras.
- **TypeScript**: Tipado estático para JavaScript.
- **AWS - S3**: Bucket para guardar los archivos estaticos y poder desplegar la aplicacion.
- **AWS - CloudFront**: Red de entrega de contenido (CDN) para servir los archivos que estan alojados en el bucket s3.

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior).
- **npm** o **yarn** como gestor de paquetes.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Lucasconci148/eshop
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd eshop
   ```

3. Instala las dependencias:
   ```bash
   npm install o yarn install
   ```

## Enunciado del ejercicio

```bash
Prueba técnica Frontend React Ssr

Desarrollar una web con React y Next js, typescript y css puro (sin librerías de componentes), que permita mostrar un listado de productos y seleccionar uno para ver su detalle.
El diseño debe seguir la estructura planteada en el excalidraw adjunto, los detalles no especificados quedan a libre elección.
Puntos a desarrollar

Componente de Lista de Artículos:

Un componente que muestre una lista de artículos
Simular la carga de los mismos mediante una llamada a una API, (en vez de ejecutar la llamada, usar los datos mockeados)
Poder marcar/desmarcar como favorito el producto
Poder filtrar por título del producto

Componente de Detalles del Artículo:
Un componente que muestra los detalles completos de un artículo cuando se hace clic en el título en la lista.
Debe tener un botón para volver al listado

Carrito de compras:
En la pantalla de detalle del producto, agregar un botón para agregar el producto al carrito
Icono de carrito en header con un contador de cuantos productos DISTINTOS hay agregados
Popup de ítems del carrito al icono de carrito
Listado de los mismo
Opción para eliminar producto
Botones - y + para agregar o eliminar unidades para cada producto

Agregar readme indicando como levantar el proyecto
Subir el proyecto a un repositorio público y compartir el link al finalizar.
Opcional: Deployar la web en algún sitio de hosting público
```
