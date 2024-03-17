# Utilise l'image de base de Java 21
FROM openjdk:21-slim-alpine

# Définis le répertoire de travail dans le conteneur
WORKDIR /app

# Copie le jar de ton application dans le conteneur
COPY target/*.jar app.jar

# Commande à exécuter lorsque le conteneur démarre
CMD ["java", "-jar", "app.jar"]
