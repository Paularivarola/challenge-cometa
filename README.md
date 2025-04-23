
# 🍻 App Beer

Aplicación desarrollada como solución para la prueba técnica **"Pagar cervezas"**, donde se simula un sistema de pedidos de cerveza entre amigos. La interfaz permite agregar cervezas a una orden, visualizar el detalle de cada ítem, registrar rondas de consumo y almacenar la información en Firebase.
![UI interface](https://i.postimg.cc/k5fQpGdQ/image.png)

## 🌐 Deploy

La aplicación se encuentra desplegada en **[Vercel](https://vercel.com/)** y puede ser accedida desde el siguiente enlace:

👉 [https://challenge-cometa-bnbr.vercel.app/](https://challenge-cometa-bnbr.vercel.app/)


## 🛠️ Tecnologías Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [React Router](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Query](https://tanstack.com/query/latest)
- [Vite](https://vitejs.dev/)

## 🚀 Funcionalidades Principales

- Listado de cervezas disponibles (`stock`)
- Visualización del detalle de cada cerveza
- Agregado de ítems a una orden
- Registro de múltiples rondas por orden
- Cálculo de subtotales, descuentos e impuestos
- Visualización de órdenes activas y pasadas
- Almacenamiento y recuperación de datos desde Firebase
- Responsive y accesible

Interfaces integradas:
- Lista de órdenes por pagar/pagadas (`Order Exist / Order Exist [Past]`)
- Información de la orden (`Payment Address`)
- Detalle de la cerveza (`Food Details`)

## 📦 Instalación

```bash
# Clona el repositorio
git clone https://github.com/Paularivarola/challenge-cometa
cd challenge-cometa

# Instala las dependencias
npm install
