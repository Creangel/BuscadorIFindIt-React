#!/bin/sh

echo "Pod/Container has started..."

echo "-----------------------------------"
echo "Prepare environment file for react-frontend"

#Copiar y reemplazar .env de la aplicación el cuál es personalizado via configmap y montado en /opt/react-frontend-enviroment/.env

cp /opt/react-frontend-custom-enviroment/.env /app/react-frontend/.env

#Ir hacia el directorio principal de react-frontend

cd /app/react-frontend

#Ejecutar la instalación de las dependencias y construir la aplicación

echo "Installing npm dependencies and building the application..."

npm install && npm run build

echo "-----------------------------------"

echo "Application has been built successfully check files on /app/react-frontend/build"
